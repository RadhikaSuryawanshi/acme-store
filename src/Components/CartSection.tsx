"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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

  return (
    <Sheet
      open={isCartOpen}
      onOpenChange={(open) => dispatch(toggleCart(open))}
    >
      <SheetTrigger asChild>
        <div className="w-[3.8%]  rounded-md border border-neutral-300 flex justify-center items-center  ">
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
            {" "}
            <title>Cart</title>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            ></path>
          </svg>
        </div>
      </SheetTrigger>
      {CartItems.length === 0 ? (
        <SheetContent className="bg-gray-200">
          <SheetHeader>
            <SheetTitle className="text-[1.1rem]">My cart</SheetTitle>
          </SheetHeader>
          <div className=" flex justify-center items-center ">
            <div className="w-[90%] mt-10  flex flex-col justify-center items-center  ">
              <div className=" py-4">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  className="h-16  transition-all ease-in-out hover:scale-110 font-bold"
                >
                  {" "}
                  <title>Cart</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[1.6rem] font-bold">Your cart is empty.</p>
            </div>
          </div>
        </SheetContent>
      ) : (
        CartItems.map((item) => (
          <SheetContent key={item.id} className="bg-gray-200">
            <SheetHeader>
              <SheetTitle className="text-[1.1rem]">My cart</SheetTitle>
            </SheetHeader>
            <div className="w-full h-screen flex flex-col justify-between items-center ">
              <div className="w-[90%] h-[16%] flex justify-between border-b border-neutral-300 gap-5 border-b">
                <div className="w-[60%] relative flex justify-between gap-1">
                  {" "}
                  <img
                    src={item.image}
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
                  <div className="h-[50%] ">
                    <p className="line-clamp-1 ">{item.title}</p>
                  </div>
                </div>

                <div className=" w-[30%]   flex flex-col gap-2 p-1 items-end ">
                  <p className="text-[0.9rem]"> ${item.price} USD</p>
                  <div className="flex justify-around items-center w-[98%] h-[50%] rounded-full  border border-neutral-300">
                    {" "}
                    <button
                      className="text-[1.3rem]"
                      type="button"
                      onClick={() => dispatch(decrementQuantity(item.id))}
                    >
                      -
                    </button>
                    <p className="text-[1rem]"> {item.quantity}</p>{" "}
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
              <div className="w-[90%] h-[35%] mb-5  flex flex-col gap-6">
                <p className="w-full flex justify-between text-neutral-400 text-[0.9rem] border-b border-neutral-300 ">
                  Taxes{" "}
                  <span className="text-black text-[1.1rem]">0.00 USD</span>
                </p>
                <p className="w-full flex justify-between text-neutral-400 text-[0.9rem] border-b border-neutral-300 ">
                  Shipping <span>Calculated at checkout</span>
                </p>
                <p className="w-full flex justify-between text-neutral-400 text-[0.9rem] border-b border-neutral-300">
                  Total{" "}
                  <span className="text-black text-[1.1rem]">
                    ${item.price * item.quantity} USD
                  </span>
                </p>
                <button
                  type="button"
                  className="w-full h-[20%] bg-blue-600 text-[0.9rem] text-white font-semibold rounded-full"
                >
                  Proceed to checkout
                </button>
              </div>
            </div>
          </SheetContent>
        ))
      )}
    </Sheet>
  );
}
