"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

const SlugData = ({ image }: string | string[] | StaticImageData | any) => {
  const [path, setPath] = useState("");

  return (
    <div>
      <Image
        src={path ? path : image[0]}
        alt="e-commerce"
        height={400}
        width={400}
        className="h-auto w-auto"
      />
      <div className="flex items-center justify-evenly mx-auto mt-4">
        {image.map((item: string, i: number) => (
          <div key={i} className="cursor-pointer w-16 h-16">
            <Image
              src={item}
              alt="e-commerce"
              height={60}
              width={60}
              className="h-auto w-auto"
              onClick={() => {
                setPath(item);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlugData;
