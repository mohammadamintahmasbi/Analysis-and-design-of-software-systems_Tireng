import { Avatar, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-white shadow-lg py-2 fixed w-full">
      <h2 className="text-4xl font-bold flex justify-center pr-12 text-primary">
        Tireng
      </h2>
      <div className="flex justify-end">
        <div className="pl-5 flex">
          <p className="pt-3 pl-5">محمد امین طهماسبی نیا چناری</p>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
