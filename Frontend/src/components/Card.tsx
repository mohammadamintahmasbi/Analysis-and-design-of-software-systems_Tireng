import { useNavigate } from "react-router-dom";
import React from "react";

interface CardProps {
  image: string;
  description: string;
  price: number;
  address: string;
  slug: string;
}

const Card: React.FC<CardProps> = ({
  image,
  description,
  price,
  address,
  slug,
}) => {
  const navigate = useNavigate();
  return (
    <div className="w-[calc(100vw-(0.2*100vw))] lg:w-[calc(100vw-(0.6*100vw))] xl:w-[calc(100vw-(0.72*100vw))] h-[10rem] sm:h-52 bg-white rounded-lg shadow-lg">
      <div className="flex w-full h-full">
        <div
          className="h-full md:w-[40%] lg:w-[75%]"
          style={{ display: "flex" }}
        >
          <img
            src={image}
            className="rounded-r-lg"
            style={{ flexShrink: 1, objectFit: "inherit" }}
          />
        </div>
        <div className="w-full h-full flex flex-col gap-2">
          <div className="flex flex-col items-center">
            <p className="text-sm sm:text-lg md:text-xl pt-5">{description}</p>
            <p className="text-gray-500 text-sm sm:text-md">{address}</p>
          </div>

          <div className="w-full h-full flex flex-col items-end gap-1 pl-5">
            <p className="text-gray-500 text-xs sm:text-sm">قیمت برای هر شب</p>

            <p className="text-primary text-xs sm:text-sm font-bold">
              {price.toLocaleString("fa")} ریال
            </p>
          </div>

          <div className="w-full flex justify-center pb-5">
            <button
              className="w-full mx-10 lg:w-32 bg-primary py-2 rounded-lg text-white text-xs sm:text-sm hover:bg-[#13c3ba]"
              onClick={() => navigate(`/villa/${slug}`)}
            >
              مشاهده و رزرو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
