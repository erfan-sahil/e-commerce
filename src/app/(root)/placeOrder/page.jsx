"use client";
import { StoreContext } from "@/context/StoreContext";
import React, { useContext } from "react";

const page = () => {
  const { getTotalAmount } = useContext(StoreContext);

  return (
    <form
      action=""
      className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md grid grid-cols-12 gap-4"
    >
      <div className="mb-6 col-span-8">
        <p className="text-orange-500 text-2xl font-bold text-tomato mb-4">
          Delivery Information
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800"
        />
        <input
          type="text"
          placeholder="Street Address"
          className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="City"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800"
          />
          <input
            type="text"
            placeholder="State"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Country"
            className="text-orange-800 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="text-orange-800 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato"
          />
        </div>
        <input
          type="text"
          placeholder="Phone Number"
          className="text-orange-800 w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tomato"
        />
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full  col-span-4">
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
        <button className="w-full bg-tomato text-white py-2 mt-4 rounded-md bg-orange-500 hover:bg-orange-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-tomato">
          PROCEED TO PAYMENT
        </button>
      </div>
    </form>
  );
};

export default page;
