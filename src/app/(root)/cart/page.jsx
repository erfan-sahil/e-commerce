"use client";
import { StoreContext } from "@/context/StoreContext";
import Image from "next/image";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const { removeFromCart, cartItems, foodData, getTotalAmount } =
    useContext(StoreContext);
  const router = useRouter();
  const navigateToPlaceOrder = () => {
    router.push("/placeOrder");
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4 items-center mb-2">
        <div className="col-span-2">
          <p className="text-zinc-500 font-semibold">Items</p>
        </div>
        <div className="col-span-4">
          <p className="text-zinc-500 font-semibold">Title</p>
        </div>
        <div className="col-span-2">
          <p className="text-zinc-500 font-semibold">Price</p>
        </div>
        <div className="col-span-2">
          <p className="text-zinc-500 font-semibold">Quantity</p>
        </div>
        <div className="col-span-1">
          <p className="text-zinc-500 font-semibold">Total</p>
        </div>
        <div className="col-span-1">
          <p className="text-zinc-500 font-semibold">Remove</p>
        </div>
      </div>
      <hr className="mb-4" />
      {foodData.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <div
              className="grid grid-cols-12 gap-4 items-center mb-2 border-b pb-1"
              key={item._id}
            >
              <div className="col-span-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                />
              </div>
              <div className="col-span-4">
                <p className="text-black">{item.name}</p>
              </div>
              <div className="col-span-2">
                <p className="text-black">${item.price}</p>
              </div>
              <div className="col-span-2">
                <p className="text-black">{cartItems[item._id]}</p>
              </div>
              <div className="col-span-1">
                <p className="text-black">
                  ${item.price * cartItems[item._id]}
                </p>
              </div>
              <div className="col-span-1">
                <button
                  className="text-red-500"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <div className="flex justify-between mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-2/3 mr-4">
          <h2 className="text-orange-500 text-2xl font-bold text-center text-tomato mb-4">
            Cart Totals
          </h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">${getTotalAmount()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Delivery Fee</p>
              <p className="text-gray-700">${50}</p>
            </div>
            <div className="flex justify-between font-semibold">
              <b className="text-gray-900">Total</b>
              <b className="text-gray-900">
                ${getTotalAmount() ? getTotalAmount() + 50 : 0}
              </b>
            </div>
          </div>
          <button
            onClick={navigateToPlaceOrder}
            className="w-full bg-tomato text-white py-2 mt-4 rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tomato"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
          <div className="text-center">
            <p className="text-gray-700 mb-2">
              If you have a promo code, enter it here
            </p>
            <div className="flex justify-center items-center space-x-2">
              <input
                type="text"
                placeholder="Promo code"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato"
              />
              <button className="bg-tomato text-white px-4 py-2 rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tomato">
                APPLY
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
