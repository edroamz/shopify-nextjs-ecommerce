import { Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Dialog, DialogContent, DialogTrigger } from 'components/ui/dialog';
import { formatCurrency } from 'lib/utils';
import type { Cart } from 'lib/shopify/types';
import DeleteItemButton from './delete-item-button';

export default function CartModal({
  isOpen,
  setIsOpen,
  cart
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: Cart;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="relative">
        <svg
          width="20px"
          height="20px"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          color="#000000"
        >
          <path
            d="M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            fill="#000000"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M5 4h17l-2 11H7L5 4zm0 0c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5"
            stroke="#000000"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        {cart.totalQuantity > 0 && (
          <div className="absolute left-[-15px] top-[-10px] rounded-full bg-black px-1 text-xs font-bold text-white">
            {cart.totalQuantity}
          </div>
        )}
      </DialogTrigger>
      <DialogContent className="right-0 top-0 h-screen max-w-lg rounded-none p-0">
        <div className="inset-0 flex h-full flex-col items-start justify-between overflow-x-hidden border-none">
          <div className="sticky top-0 h-auto pt-14"></div>
          <div className="flex w-full flex-auto overflow-y-auto overflow-x-hidden">
            <div className="w-full">
              <h2 className="px-6 text-2xl font-bold tracking-tight text-gray-900">Your cart</h2>
              {cart.lines.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden p-6">
                  <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
                </div>
              ) : null}
              {cart.lines.length !== 0 ? (
                <ul className="mt-5 space-y-5 pb-10">
                  {cart.lines.map((item) => {
                    return (
                      <li key={item.id} className="grid auto-cols-min grid-cols-12 px-6">
                        <Link
                          href={`/product/${item.merchandise.product.handle}`}
                          onClick={() => setIsOpen(false)}
                          className="col-span-2 col-start-1 row-span-3 row-start-1 mt-0"
                        >
                          <Image
                            src={item.merchandise.product.featuredImage.url}
                            alt={
                              item.merchandise.product.featuredImage.altText ||
                              item.merchandise.product.title
                            }
                            height={item.merchandise.product.featuredImage.height}
                            width={item.merchandise.product.featuredImage.width}
                          />
                        </Link>
                        <div className="col-span-10 col-start-3 row-span-3 grid pl-6">
                          <div className="row-start-1 flex flex-row items-start justify-between gap-x-6">
                            <Link
                              href={`/product/${item.merchandise.product.handle}`}
                              onClick={() => setIsOpen(false)}
                              className="w-full text-sm font-medium"
                            >
                              {item.merchandise.product.title}
                            </Link>
                            <DeleteItemButton item={item} />
                          </div>
                          <div className="row-start-3 flex items-end">
                            <span className="text-sm">
                              {formatCurrency(
                                Number(item.merchandise.product.priceRange.maxVariantPrice.amount) *
                                  item.quantity
                              )}
                            </span>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
          {cart.lines.length !== 0 ? (
            <div
              style={{ boxShadow: '0 -6px 18px -8px rgba(0,0,0,.25)' }}
              className="sticky bottom-0 h-auto w-full flex-shrink-0 p-6"
            >
              <div className="flex flex-row items-center justify-between">
                <span className="font-semibold">
                  Subtotal{' '}
                  <span className="text-sm font-normal">
                    ({`${cart.totalQuantity} ${cart.totalQuantity > 1 ? 'items' : 'item'}`})
                  </span>
                </span>
                <span className="font-semibold">
                  {formatCurrency(Number(cart.cost.subtotalAmount.amount))}
                </span>
              </div>
              <a
                href={cart.checkoutUrl}
                className="my-6 block w-full rounded-md bg-black px-4 py-3 text-center text-white"
              >
                Continue to Checkout
              </a>
            </div>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}
