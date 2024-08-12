"use client";

import { useUser } from "@/context/UserContext";
import allArts from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import AddToCatBtn from "./shared/AddToCartBtn";

const ArtGallery = () => {
  const { user } = useUser();

  return (
    <div className="bg-black">
    <div className=" sm:py-10 max-w-6xl mx-auto px-5">
      <h1 className="md:text-5xl text-3xl font-semibold text-center text-yellow-50 py-10">
        Wellcome to exhibition gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allArts.map((art) => (
          <div
            key={art.id}
            className="border-2 rounded-lg shadow hover:opacity-70 duration-300 cursor-pointer bg-white"
          >
            <Link href={`/gallery/${art.id}`}>
              <div className="relative w-full pb-[100%]">
                <Image
                  src={art.photo}
                  layout="fill"
                  objectFit="cover"
                  alt={art.name}
                  className="rounded"
                />
              </div>
              <div className="p-2">
                <h2 className="text-lg font-medium">{art.name}</h2>
                <p className="text-lg">
                  Artist: <span className="text-slate-500">{art.artist}</span>{" "}
                </p>
                <p>
                  Price: <span className="text-slate-500">${art.price}</span>
                </p>
                <p>
                  Stock: <span className="text-slate-500">{art.stock}</span>
                </p>
              </div>
            </Link>

            <div className="flex justify-center items-center">
              <AddToCatBtn item={art} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ArtGallery;
