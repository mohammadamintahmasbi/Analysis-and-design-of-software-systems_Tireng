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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";

const Admin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="h-screen">
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
      <div className="w-full h-full pt-24">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex justify-start mr-16 text-white text-lg rounded-lg">
              + اضافه کردن ویلا
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[725px]">
            <DialogHeader>
              <div className="flex justify-start pr-10">
                <DialogTitle className="text-xl">اطلاعات ویلا</DialogTitle>
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
                <Input id="title" className="w-96" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="owner" className="text-right">
                  میزبان
                </Label>
                <Input id="owner" className="w-96" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="address" className="text-right">
                  آدرس
                </Label>
                <Input id="address" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="num_rooms" className="text-right">
                  تعداد اتاق ها
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="تعداد اتاق" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>تعداد اتاق</SelectLabel>
                      <SelectItem value="one">یک</SelectItem>
                      <SelectItem value="two">دو</SelectItem>
                      <SelectItem value="three">سه</SelectItem>
                      <SelectItem value="four">چهار</SelectItem>
                      <SelectItem value="five">پنج</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="meterage" className="text-right">
                  متراژ
                </Label>
                <Input id="meterage" className="w-52" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="price" className="text-right">
                  قیمت برای هر شب (تومان)
                </Label>
                <Input id="price" className="w-60" />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="description" className="text-right">
                  توضیحات
                </Label>
                <Textarea />
                {/* <Input id="description" /> */}
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="picture">تصویر ویلا</Label>
                <Input
                  id="picture"
                  type="file"
                  className="w-52 border cursor-pointer"
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" className="w-52 ">
                ثبت
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="h-[calc(100vh-400px)] flex justify-center items-center text-gray-500">
          ویلایی موجود نی‍ست!
        </div>
      </div>
    </div>
  );
};

export default Admin;
