import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import villa2 from "../assets/images/villa2.jpg";
import vila from "../assets/images/vila.jpg";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [villa2, vila];

const Villa = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="pr-36 pt-10 flex items-center gap-2"
        onClick={() => navigate("/")}
      >
        <FaArrowRightLong />
        بازگشت
      </button>
      <div className="h-[calc(100vh-70px)] flex justify-center items-center">
        <div className="h-[40rem] w-[60rem] bg-white shadow-lg rounded-xl">
          <div className="pt-7 pr-7 flex">
            <img
              src={villa2}
              alt="image of the villa"
              width={300}
              height={300}
              className="rounded-xl shadow-lg"
            />
            <p className="mr-6 ml-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, est cumque sed blanditiis repudiandae aperiam
              distinctio ea optio neque eveniet ullam, perspiciatis ipsam
              facilis enim necessitatibus exercitationem ratione tenetur. Quasi!
            </p>
          </div>
          <div className="h-40 w-40"></div>
        </div>
      </div>
    </div>
  );
};

export default Villa;
