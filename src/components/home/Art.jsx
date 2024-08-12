import Image from "next/image";

const Art = ({ art }) => {
  const { name, photo, artist, price, stock } = art;
  return (
    <div className="border-2 rounded-lg shadow-lg shadow-slate-700 hover:scale-105 duration-300 cursor-pointer">
      <div className="relative w-full pb-[100%]">
        <Image
          src={photo}
          layout="fill"
          objectFit="cover"
          alt={name}
          className="rounded"
        />
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold  text-pink-500">{name}</h2>
        <p className="text-lg text-white">
          Artist: <span className="text-slate-500">{artist}</span>{" "}
        </p>
        <p className="text-white">
          Price: <span className="text-white">${price}</span>
        </p>
        <p className="text-white">
          Stock: <span className="text-slate-500">{stock}</span>
        </p>
      </div>
    </div>
  );
};

export default Art;
