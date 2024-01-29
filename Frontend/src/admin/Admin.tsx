import Navbar from "./components/Navbar";
import AddVillaForm from "./components/AddVillaForm";
import VillaCard from "./components/VillaCard";
// import { useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import vila from "../assets/images/vila.jpg";
import vila3 from "../assets/images/vila3.jpg";
import vila4 from "../assets/images/vila4.jpg";
import vila5 from "../assets/images/vila5.jpg";
import vila6 from "../assets/images/vila6.jpg";

const Admin = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [villas, setVillas] = useState([
    {
      name: "رزرو ویلا دوخوابه آرمین 2",
      owner: "سید بنیاد ابطحی",
      address: "گیلان، لنگرود",
      num_of_rooms: 2,
      meterage: 120,
      price_per_day: 2350000,
      description: "asdadadasd",
      image: vila3,
    },
    {
      name: "رزرو ویلا دوخوابه آرمین 2",
      owner: "محمد امین طهماسبی نیا چناری",
      address: "مازندران، نمک آبرود",
      num_of_rooms: 2,
      meterage: 120,
      price_per_day: 2387000,
      description: "asdadadasd",
      image: vila4,
    },
    {
      name: "رزرو ویلا دوخوابه آرمین 2",
      owner: "سید بنیاد ابطحی",
      address: "گیلان، لنگرود",
      num_of_rooms: 2,
      meterage: 120,
      price_per_day: 2999000,
      description: "asdadadasd",
      image: vila5,
    },
    {
      name: "رزرو ویلا دوخوابه آرمین 2",
      owner: "محمد امین طهماسبی نیا چناری",
      address: "گیلان، لنگرود",
      num_of_rooms: 2,
      meterage: 120,
      price_per_day: 2340000,
      description: "asdadadasd",
      image: vila,
    },
    {
      name: "رزرو ویلا دوخوابه آرمین 2",
      owner: "سید بنیاد ابطحی",
      address: "مازندران، نمک آبرود",
      num_of_rooms: 2,
      meterage: 120,
      price_per_day: 1200000,
      description: "asdadadasd",
      image: vila6,
    },
  ]);
  return (
    <div className="h-screen">
      <Navbar />
      <div className="w-full h-full pt-24">
        <AddVillaForm />
        <div className="">
          {villas.length === 0 ? (
            <div className="h-[calc(100vh-350px)] flex justify-center items-center text-gray-500">
              ویلایی موجود نیست!
            </div>
          ) : (
            <div className="w-full grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-20 text-gray-500 pt-14 pb-20">
              {villas.map((villa) => {
                return <VillaCard villa={villa} setVillas={setVillas} />;
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
