"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState as useState } from "react";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <>
      <div>
        <Image
          src={images[current]}
          alt="image goes here"
          height={300}
          width={300}
          priority={true}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="flex mt-2">
          {images.length > 1 &&
            images.map((image: string, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={cn(
                    "border mr-2 cursor-pointer hover:border-b-orange-600 ",
                    current === index && "border-orange-500"
                  )}
                >
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    width={100}
                    height={100}
                    className="rounded-md flex object-cover"
                  />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default ProductImages;
