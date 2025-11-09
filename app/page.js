"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import FormComponent from "@/components/FormComponent";
import { useRouter } from "next/navigation";
// import image1 from "../public/assets/images/image1.png";

export default function Home() {
  const router = useRouter();
  const [products, setProduct] = useState([]);
  const [filtersProduct, setFilteredProduct] = useState([]);

  // function
  const getAllProduct = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      //console.log("-getAllProduct-", response);

      if (!response.ok) throw new Error("Failed");

      const allProduct = await response.json();
      //console.log("-allProduct-", allProduct.products, allProduct.limit);
      setProduct(allProduct.products);
      setFilteredProduct(allProduct.products);
    } catch (error) {
      setProduct([]);
      setFilteredProduct([]);
      //console.log("error", error);
    }
  };
  console.log("-products-", products);
  console.log("-filteredproducts-", filtersProduct);

  // ใช้ในกรณที่ให้เข้า getAllProduct ครั้งเดียว
  useEffect(() => {
    getAllProduct();
  }, []);

  const handleSearch = (text) => {
    const filterproducts = products.filter((p) =>
      p.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredProduct(filterproducts);
  };

  return (
    <div>
      <Header />
      <FormComponent onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-10">
        {filtersProduct.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-slate-400 flex flex-col items-center border border-gray-500 rounded-2xl hover:shadow-lg cursor-pointer"
            onClick={() => router.push(`/products/${item.id}`)}
          >
            <img alt={item.title} src={item.thumbnail}></img>
            <p className="text-[16px] font-bold text-center">{item.title}</p>
            <p className="text-[16px]"> {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
// บรรทัด 13 grid ทำให้แบ่งช่องได้ง่ายขึ้น
// .map เหมือน for loop แต่สั้นกว่า loop เอาพวกรูปสินค้าออกมา
// useRouter ใช้ในการย้ายหน้า
// .push('') เปลี่ยน หน้า
{
  /* <img alt={"image"} src={image1.src}></img> */
}
