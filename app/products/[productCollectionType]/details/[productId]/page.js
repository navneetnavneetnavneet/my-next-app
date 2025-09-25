"use client";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { productId, productCollectionType } = useParams();
  console.log(productId, productCollectionType);

  return (
    <div>
      <h2 className="text-2xl font-medium tracking-tight capitalize">
        {productCollectionType}'s Collection deatils Page
      </h2>
      <h2 className="text-2xl font-medium tracking-tight capitalize">
        {productId} details Page
      </h2>
    </div>
  );
};

export default page;
