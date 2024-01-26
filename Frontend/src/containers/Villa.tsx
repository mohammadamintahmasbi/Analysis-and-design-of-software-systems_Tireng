import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import vila from "../assets/images/vila.jpg";

interface VillaInfo {
  name: string;
  owner: string;
  address: string;
  num_of_rooms: number;
  meterage: number;
  price_per_day: number;
  description: string;
  image: string;
  [key: string]: string | number;
}

const Villa = () => {
  const navigate = useNavigate();

  let villa_info: VillaInfo = {
    name: "ویلا دو خوابه آرمین",
    owner: "محمد امین طهماسبی نیا چناری",
    address: "مازندران، بابل، خیابان شریعتی",
    num_of_rooms: 2,
    meterage: 127,
    price_per_day: 2200000,
    description: `  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
    نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
    کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
    جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای
    طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
    فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
    موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد`,
    image: vila,
  };

  const names: { [key: string]: string } = {
    owner: "میزبان",
    address: "آدرس",
    num_of_rooms: "تعداد اتاق ها",
    meterage: "متراژ",
    price_per_day: "قیمت برای هر شب",
  };

  const check = (key: string) => {
    if (key == "price_per_day") {
      return `${villa_info.price_per_day.toLocaleString("fa")} تومان`;
    } else if (key == "num_of_rooms") {
      return villa_info.num_of_rooms.toLocaleString("fa");
    } else if (key == "meterage") {
      return `${villa_info.meterage.toLocaleString("fa")} متر`;
    } else {
      return villa_info[key];
    }
  };

  return (
    <div>
      <button
        className="pt-10 flex items-center justify-start pr-10 gap-2"
        onClick={() => navigate("/")}
      >
        <FaArrowRightLong />
        بازگشت
      </button>
      <div className="h-[calc(100vh-70px)] flex justify-center gap-5">
        <div className="flex items-center">
          <div className="h-[40rem] w-[50rem] bg-white shadow-2xl border-[1px] border-gray-200 rounded-xl">
            <div className="pt-7 pr-7 flex w-full">
              <div className="w-1/2 h-1/2">
                <img
                  src={villa_info.image}
                  alt="image of the villa"
                  style={{ flexShrink: 1, objectFit: "inherit" }}
                  className="rounded-xl shadow-lg"
                />
              </div>
              <div className="w-1/2">
                <h2 className="text-2xl flex justify-center font-bold">
                  {villa_info.name}
                </h2>
                <div className="pt-10 pr-10 flex flex-col gap-3">
                  {Object.entries(villa_info).map(([key]) =>
                    names[key] ? (
                      <div className="flex gap-2">
                        <p className="font-semibold">{names[key]}: </p>
                        <p>{check(key)}</p>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
            <p className="w-full pt-10 px-7">{villa_info.description}</p>
            <div className="flex justify-center pt-10">
              <button className="bg-primary py-2 px-7 rounded-lg text-white hover:bg-[#13c3ba]">
                رزرو ویلا
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Villa;
