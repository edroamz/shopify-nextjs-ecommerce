"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

import { cn } from "lib/utils";
import { ProductVariant } from "lib/shopify/types";

export function AddToCart({
  variants,
  availableForSale,
}: {
  variants: ProductVariant[];
  availableForSale: boolean;
}) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0]?.id);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [adding, setAdding] = useState(false);

  const isMutating = adding || isPending;

  async function handleAdd() {
    if (!availableForSale) return;

    setAdding(true);

    const response = await fetch(`/api/cart`, {
      method: "POST",
      body: JSON.stringify({
        merchandiseId: selectedVariantId,
      }),
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setAdding(false);

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <button
      aria-label="Add item to cart"
      disabled={isMutating}
      onClick={handleAdd}
      className={cn(
        "focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none hover:bg-gray-700 text-white font-medium text-base py-3 px-8 bg-gray-900 border-transparent border rounded-md justify-center items-center w-full flex mt-8",
        {
          "cursor-not-allowed opacity-60": !availableForSale,
          "cursor-not-allowed": isMutating,
        }
      )}
    >
      {isMutating ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      ) : null}
      <span>{availableForSale ? "Add To Cart" : "Out Of Stock"}</span>
    </button>
  );
}
