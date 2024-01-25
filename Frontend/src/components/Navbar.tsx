import { Button } from "@/components/ui/button";
import { useState } from "react";
import { GoPerson } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-screen h-16 bg-white border-[1px] shadow-sm bg-opacity-91 fixed z-50">
      <div className="flex justify-between pt-2">
        <h1
          className="text-4xl pr-10 text-primary font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          Tireng
        </h1>

        <div className="flex gap-3 pl-10">
          {!isSignedIn ? (
            <>
              <Button variant="outline" onClick={() => navigate("/login")}>
                ورود
              </Button>
              <Button onClick={() => navigate("/signup")}>ثبت نام</Button>
            </>
          ) : (
            <GoPerson size={27} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
