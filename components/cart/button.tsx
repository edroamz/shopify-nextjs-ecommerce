"use client";

import { useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import type { Cart } from "lib/shopify/types";
import CartModal from "./modal";

export default function CartButton({
  cart,
  cartIdUpdated,
}: {
  cart: Cart;
  cartIdUpdated: boolean;
}) {
  const [, setCookie] = useCookies(["cartId"]);
  const [cartIsOpen, setCartIsOpen] = useState(false);
  const quantityRef = useRef(cart.totalQuantity);

  // Temporary hack to update the `cartId` cookie when it changes since we cannot update it
  // on the server-side (yet).
  useEffect(() => {
    if (cartIdUpdated) {
      setCookie("cartId", cart.id, {
        path: "/",
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
      });
    }
    return;
  }, [setCookie, cartIdUpdated, cart.id]);

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (cart.totalQuantity !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!cartIsOpen) {
        setCartIsOpen(true);
      }

      // Always update the quantity reference
      quantityRef.current = cart.totalQuantity;
    }
  }, [cartIsOpen, cart.totalQuantity, quantityRef]);

  return (
    <CartModal isOpen={cartIsOpen} setIsOpen={setCartIsOpen} cart={cart} />
  );
}
