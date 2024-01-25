import Navbar from "@/components/Navbar";
import Card from "@/components/Card";
import vila from "../assets/images/vila.jpg";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  const price = 22000000;

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
                  className="pr-10 bg-white rounded-lg px-4 py-3 w-96 focus:outline-none focus:border-gray-600 border-[1px] focus:shadow-sm"
                  placeholder="جستجوی ویلا"
                />
                <FiSearch
                  size={25}
                  className="text-gray-400 absolute top-2 right-2 cursor-pointer"
                />
              </div>

              <button className="rounded-lg px-5 py-3 text-primary font-bold active:bg-gray-200 bg-white">
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
            description="رزرو ویلا دوخوابه آرمین 2"
            price={price}
            address="گیلان، لنگرود"
            slug="asd"
          />
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه آرمین 2"
            price={price}
            address="گیلان، لنگرود"
            slug="asfgd"
          />
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه آرمین 2"
            price={price}
            address="گیلان، لنگرود"
            slug="areqsd"
          />
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه آرمین 2"
            price={price}
            address="گیلان، لنگرود"
            slug="aslkld"
          />
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه آرمین 2"
            price={price}
            address="گیلان، لنگرود"
            slug="aslkld"
          />
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه آرمین 2"
            price={price}
            address="گیلان، لنگرود"
            slug="aslkld"
          />
          <Card
            image={vila}
            description="رزرو ویلا دوخوابه آرمین 2"
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
