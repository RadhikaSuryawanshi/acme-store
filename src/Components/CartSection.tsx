"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
  toggleCart,
} from "@/lib/redux/CartSlice";

export default function CartSection() {
  const dispatch = useAppDispatch();

  const isCartOpen = useAppSelector((state) => state.cart.isCartOpen);
  const CartItems = useAppSelector((state) => state.cart.items);
  const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);

  return (
    <Sheet
      open={isCartOpen}
      onOpenChange={(open) => dispatch(toggleCart(open))}
    >
      {totalQuantity > 0 && (
        <span className="absolute top-[15px] right-[15px] bg-blue-600 text-white text-[0.7rem] w-5 h-5 rounded-full flex justify-center items-center">
          {totalQuantity}
        </span>
      )}
      <SheetTrigger asChild>
        <div className="w-[11%] lg:w-[3.8%] rounded-md border border-neutral-300 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            data-slot="icon"
            className="h-10 py-3 transition-all ease-in-out hover:scale-110"
          >
            <title>Cart</title>

            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
      </SheetTrigger>

      <SheetContent className="bg-gray-200 overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-[1.1rem]">My cart</SheetTitle>
        </SheetHeader>

        {CartItems.length === 0 ? (
          <div className="flex justify-center items-center mt-10">
            <div className="w-[90%] flex flex-col justify-center items-center">
              <div className="py-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-16 transition-all ease-in-out hover:scale-110 font-bold"
                >
                  <title>Cart</title>

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </div>

              <p className="text-[1.6rem] font-bold">Your cart is empty.</p>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-between">
            <div className="flex flex-col gap-5 mt-5">
              {CartItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex justify-between border-b border-neutral-300 gap-5 pb-4"
                >
                  <div className="w-[60%] relative flex justify-between gap-2">
                    <img
                      src={item.thumbnail}
                      alt="cartimage"
                      className="w-[35%] h-[90%] rounded-md bg-neutral-300 p-1"
                    />

                    <button
                      type="button"
                      onClick={() => dispatch(removeItem(item.id))}
                      className="w-[12%] text-[1rem] text-white rounded-full bg-neutral-500 absolute top-[-9%] left-[-5%]"
                    >
                      ×
                    </button>

                    <div className="h-[50%]">
                      <p className="line-clamp-1">{item.title}</p>
                    </div>
                  </div>

                  <div className="w-[30%] flex flex-col gap-2 p-1 items-end">
                    <p className="text-[0.9rem]">${item.price} USD</p>

                    <div className="flex justify-around items-center w-[98%] h-[50%] rounded-full border border-neutral-300">
                      <button
                        className="text-[1.3rem]"
                        type="button"
                        onClick={() => dispatch(decrementQuantity(item.id))}
                      >
                        -
                      </button>

                      <p className="text-[1rem]">{item.quantity}</p>

                      <button
                        className="text-[1.3rem]"
                        type="button"
                        onClick={() => dispatch(incrementQuantity(item.id))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-full mt-10 mb-5 flex flex-col gap-6">
              <p className="w-full flex justify-between text-neutral-400 text-[0.9rem] border-b border-neutral-300 pb-2">
                Taxes
                <span className="text-black text-[1.1rem]">0.00 USD</span>
              </p>

              <p className="w-full flex justify-between text-neutral-400 text-[0.9rem] border-b border-neutral-300 pb-2">
                Shipping
                <span>Calculated at checkout</span>
              </p>

              <p className="w-full flex justify-between text-neutral-400 text-[0.9rem] border-b border-neutral-300 pb-2">
                Total
                <span className="text-black text-[1.1rem]">
                  $
                  {CartItems.reduce(
                    (total, item) => total + item.price * item.quantity,
                    0,
                  )}{" "}
                  USD
                </span>
              </p>

              <button
                type="button"
                className="w-full h-[45px] bg-blue-600 text-[0.9rem] text-white font-semibold rounded-full"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
