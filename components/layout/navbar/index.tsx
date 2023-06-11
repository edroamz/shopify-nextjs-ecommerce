import Link from "next/link";
import { Suspense } from "react";
import Cart from "components/cart";

function CartIcon() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="#000000"
    >
      <path
        d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export default async function Navbar() {
  return (
    <header>
      <div className="flex items-center justify-between mx-auto px-4 sm:px-6 py-8 xl:py-10 lg:max-w-7xl lg:px-8">
        <Link className="mr-6 flex items-center space-x-2" href="/">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="12" cy="12" r="10"></circle>
          </svg>
          <span className="font-bold sm:inline-block">ACME Store</span>
        </Link>
        <div className="flex items-center justify-center gap-8">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#000000"
          >
            <path
              d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
              stroke="#000000"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          <Suspense fallback={<CartIcon />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
