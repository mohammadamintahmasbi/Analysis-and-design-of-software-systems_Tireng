import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

type FormData = {
  username: string;
  password: string;
};

const onSubmit: SubmitHandler<FormData> = (data) => {
  // we should check if user exists or not
  console.log(data);
};

const Form = () => {
  const { control, handleSubmit } = useForm<FormData>();
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className="h-[30rem] w-[25rem] border-[1px] border-gray-200 bg-white bg-opacity-60 rounded-xl shadow-lg">
        <h3 className="text-5xl font-bold flex justify-center pt-12 text-primary">
          Tireng
        </h3>
        <div className="">
          <div className="pt-10 pb-5 pr-6 flex flex-col justify-start gap-2 text-sm text-slate-500">
            <div>
              <p>سلام!</p>
              <p>لطفا ایمیل خود را وارد کنید</p>
            </div>
          </div>
          <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-center">
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    className="p-2 rounded-md border border-slate-400 outline-none focus:outline-primary focus:border-none dark:text-white w-[22rem]"
                  />
                )}
              />
            </div>
            <p className="text-sm text-slate-500 py-3 pr-6">
              لطفا کلمه عبور خود را وارد کنید
            </p>
            <div className="relative flex justify-center">
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type={isVisible ? "text" : "password"}
                    placeholder="   کلمه عبور"
                    className="p-2 rounded-md border border-slate-400 outline-none focus:outline-primary focus:border-none w-[22rem]"
                  />
                )}
              />
              <div
                className="absolute top-3 left-8 cursor-pointer"
                onClick={handleVisibility}
              >
                {isVisible ? (
                  <MdVisibilityOff size={20} />
                ) : (
                  <MdVisibility size={20} />
                )}
              </div>
            </div>
          </form>
        </div>
        <div className="flex justify-center pt-10 ">
          <Button className="w-[22rem] text-lg">ورود</Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
