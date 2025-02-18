"use client";
import Link from "next/link";
import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Name:", name);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-tomato to-red-500">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4">
        <h2 className="text-3xl  font-bold text-center mb-6 text-orange-500">
          Welcome
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800 focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800 focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tomato text-orange-800 focus:border-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-tomato text-white py-3 rounded-lg bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-tomato transition-all duration-200"
          >
            Sign up
          </button>
        </form>
        <div className="mt-2 text-center">
          <small className="text-black">
            All ready have an account?{" "}
            <Link className="text-orange-500" href="/login">
              Sign In
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Signup;
