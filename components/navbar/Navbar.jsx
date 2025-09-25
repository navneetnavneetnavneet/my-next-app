import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-10 py-4 border-b border-zinc-800 flex items-center justify-between">
      <h1 className="text-xl font-bold">NextJs</h1>
      <div className="flex items-center gap-10">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
