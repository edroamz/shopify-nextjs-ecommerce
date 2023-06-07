"use client";

import { useState, useId } from "react";

import { storefront } from "@/lib/shopify";

export function AddToCart({ variantId }: any) {
  const [isLoading, setIsLoading] = useState(false);
  const quantityInputId = useId();

  const gql = String.raw;

  const createCartMutation = gql`
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
        }
      }
    }
  `;
  const updateCartMutation = gql`
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
        }
      }
    }
  `;

  async function handleAddToCart(e: any) {
    // Prevent the browser from reloading the page
    e.preventDefault();
    setIsLoading(true);

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const quantity = Number(formData.get("quantityInput"));

    let cartId = sessionStorage.getItem("cartId");

    if (cartId) {
      const variables = {
        cartId,
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      };
      const { data } = await storefront(updateCartMutation, variables);
    } else {
      const variables = {
        input: {
          lines: [
            {
              merchandiseId: variantId,
              quantity,
            },
          ],
        },
      };
      const { data } = await storefront(createCartMutation, variables);
      sessionStorage.setItem("cartId", data.cartCreate.cart.id);
    }

    setIsLoading(false);
  }

  return (
    <form action="post" onSubmit={handleAddToCart}>
      <label htmlFor={quantityInputId}>Quantity</label>
      <input
        id={quantityInputId}
        name="quantityInput"
        type="number"
        className="ml-4"
        defaultValue={1}
        min={1}
      />
      <button
        type="submit"
        className="focus:ring-offset-2 focus:ring-2 focus:ring-gray-800 focus:outline-none hover:bg-gray-700 text-white font-medium text-base py-3 px-8 bg-gray-900 border-transparent border rounded-md justify-center items-center w-full flex mt-8"
      >
        {isLoading && (
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
        )}
        Add to cart
      </button>
    </form>
  );
}
