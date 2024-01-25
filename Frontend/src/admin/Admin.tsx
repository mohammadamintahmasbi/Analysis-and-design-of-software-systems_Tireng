import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

const options = {
  داشبورد: "/admin/dashboard",
  "اضافه کردن": "/admin/add",
  ویرایش: "/admin/edit",
  حذف: "/admin/delete",
};

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="h-screen">
      <div className="flex justify-between bg-white shadow-lg pb-5">
        <h2 className="text-5xl font-bold flex justify-center pt-5 pr-12 text-primary">
          Tireng
        </h2>
        <div className="flex justify-end">
          <div className="pl-5 pt-5 flex">
            <p className="pt-3 pl-5">John Doe</p>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
            </Avatar>
          </div>
        </div>
      </div>
      <div className=" pt-12">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mr-40 text-white text-lg rounded-lg">
              + اضافه کردن ویلا
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <div className="flex justify-start pr-10">
                <DialogTitle>اطلاعات ویلا</DialogTitle>
              </div>
              <div className="flex justify-start pr-10">
                <DialogDescription>
                  پر کردن همه ی فیلد های الزامی هستند
                </DialogDescription>
              </div>
            </DialogHeader>

            <div className="grid gap-4 py-4 items-start">
              <div className="flex items-center gap-5">
                <Label htmlFor="title" className="text-right">
                  عنوان
                </Label>
                <Input id="title" className="w-52" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="address" className="text-right">
                  آدرس
                </Label>
                <Input id="address" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="description" className="text-right">
                  توضیحات
                </Label>
                <Textarea />
                {/* <Input id="description" /> */}
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="price" className="text-right">
                  قیمت برای هر شب(ریال)
                </Label>
                <Input id="price" className="w-60" />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">ثبت</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* <button className="h-12 w-40 bg-primary hover:bg-cyan-600  mr-40 text-white text-lg rounded-lg font-bold">
          + اضافه کردن ویلا
        </button> */}
        <div className="h-[calc(100vh-400px)] flex justify-center items-center text-gray-500">
          ویلایی موجود نی‍ست!
        </div>
      </div>
    </div>
  );
};

export default Admin;
