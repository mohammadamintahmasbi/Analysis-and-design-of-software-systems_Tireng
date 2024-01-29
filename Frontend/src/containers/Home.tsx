import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import vila from "../assets/images/vila.jpg";
import villa2 from "../assets/images/villa2.jpg";
import vila3 from "../assets/images/vila3.jpg";
import vila4 from "../assets/images/vila4.jpg";
import vila5 from "../assets/images/vila5.jpg";
import vila6 from "../assets/images/vila6.jpg";
import vila7 from "../assets/images/vila7.jpg";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  const price = 2350000;

  return (
    <div className="">
      <Navbar />
      <div>
        <div className="bg-primary h-96 flex justify-center items-center rounded-b-2xl shadow-md">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-4xl font-bold">ویلاهای لوکس</h1>
            <p className="text-white text-lg">
              برای تجربه‌ای لوکس در سفرهای شما
            </p>
            <div className="flex flex-col md:flex-row gap-5 mt-5">
              <div className="relative">
                <input
                  type="text"
                  className="pr-10 bg-white rounded-lg px-4 py-2 w-96 focus:outline-none focus:border-gray-600 border-[1px] focus:shadow-sm"
                  placeholder="جستجوی ویلا"
                />
                <FiSearch
                  size={25}
                  className="text-gray-400 absolute top-2 right-2 cursor-pointer"
                />
              </div>

              <button className="rounded-lg px-5 py-2 text-primary font-bold active:bg-gray-200 bg-white">
                جستجو
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 pt-10 pr-28">
          لیست ویلاها
        </h2>

        <div className="pt-16 pb-20 px-20 grid place-items-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه شمال 1"
            price={price}
            address="گیلان، لنگرود"
            slug="asd"
          />
          <Card
            image={villa2}
            description="رزرو ویلا دوخوابه شمال 2"
            price={price}
            address="مازندران، نمک آبرود"
            slug="asfgd"
          />
          <Card
            image={vila3}
            description="رزرو ویلا دوخوابه شمال 3"
            price={price}
            address="گیلان، لنگرود"
            slug="areqsd"
          />
          <Card
            image={vila4}
            description="رزرو ویلا دوخوابه شمال 4"
            price={price}
            address="مازندران، نمک آبرود"
            slug="aslkld"
          />
          <Card
            image={vila5}
            description="رزرو ویلا دوخوابه شمال 5"
            price={price}
            address="گیلان، لنگرود"
            slug="aslkld"
          />
          <Card
            image={vila6}
            description="رزرو ویلا دوخوابه شمال 6"
            price={price}
            address="مازندران، نمک آبرود"
            slug="aslkld"
          />
          <Card
            image={vila7}
            description="رزرو ویلا دوخوابه شمال 7"
            price={price}
            address="گیلان، لنگرود"
            slug="aslkld"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
