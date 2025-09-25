"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { productCollectionType } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-medium tracking-tight capitalize">
        {productCollectionType}'s Collention Page
      </h2>
    </div>
  );
};

export default page;
