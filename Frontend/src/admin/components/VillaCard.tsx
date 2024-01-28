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
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Villa = {
  name: string;
  owner: string;
  address: string;
  num_of_rooms: number;
  meterage: number;
  price_per_day: number;
  description: string;
  image: string;
};

type VillaCardProps = {
  villa: Villa;
  setVillas: (villas: Villa[]) => void;
};

const VillaCard: React.FC<VillaCardProps> = ({ villa, setVillas }) => {
  let temp = { ...villa };
  const [info, setInfo] = useState(temp);

  return (
    <div className="h-96 w-72 bg-white rounded-lg shadow-lg">
      <img src={villa.image} alt="" className="rounded-t-lg" />
      <p className="flex justify-center pt-3">{villa.name}</p>
      <div className="flex flex-col justify-start pr-5 text-sm pt-2">
        <p>{villa.address}</p>
        <p>تعداد اتاق ها: {villa.num_of_rooms.toLocaleString("fa")}</p>
        <p>متراژ: {villa.meterage.toLocaleString("fa")} متر</p>
        <p>قیمت برای هر شب: {villa.price_per_day.toLocaleString("fa")} تومان</p>
      </div>
      <div className="flex justify-end gap-4 pl-5 pt-5">
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-red-600 text-white py-1 px-2 rounded-md text-sm">
              حذف
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <div className="flex justify-start">
              <DialogHeader>
                <div className="flex pr-7 pt-3">
                  <DialogTitle>حذف ویلا</DialogTitle>
                </div>
                <div className="pr-7 pt-2">
                  <DialogDescription>
                    آیا از حذف این ویلا اطمینان دارید؟
                  </DialogDescription>
                </div>
              </DialogHeader>
            </div>

            <DialogFooter>
              <div className="flex gap-3">
                <button className="text-black border-[1px] border-gray-400 py-1 px-3 rounded-md text-sm">
                  خیر
                </button>
                <button className="bg-red-600 text-white py-1 px-3 rounded-md text-sm">
                  بله
                </button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-blue-500 text-white py-1 px-2 rounded-md text-sm">
              ویرایش
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[725px]">
            <div className="flex justify-start">
              <DialogHeader>
                <div className="flex pr-7 pt-3">
                  <DialogTitle>ویرایش اطلاعات ویلا</DialogTitle>
                </div>
              </DialogHeader>
            </div>

            <div className="grid gap-4 py-4 items-start">
              <div className="flex items-center gap-5">
                <Label htmlFor="title" className="text-right">
                  عنوان
                </Label>
                <Input
                  id="title"
                  className="w-96"
                  value={info.name}
                  onChange={(e) => setInfo({ ...info, name: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="owner" className="text-right">
                  میزبان
                </Label>
                <Input
                  id="owner"
                  className="w-96"
                  value={info.owner}
                  onChange={(e) => setInfo({ ...info, owner: e.target.value })}
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="address" className="text-right">
                  آدرس
                </Label>
                <Input
                  id="address"
                  value={info.address}
                  onChange={(e) =>
                    setInfo({ ...info, address: e.target.value })
                  }
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="num_of_rooms" className="text-right">
                  تعداد اتاق ها
                </Label>
                <Select
                  value={`${info.num_of_rooms}`}
                  onValueChange={(value) =>
                    setInfo({ ...info, num_of_rooms: Number(value) })
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="تعداد اتاق" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>تعداد اتاق</SelectLabel>
                      <SelectItem value="1">یک</SelectItem>
                      <SelectItem value="2">دو</SelectItem>
                      <SelectItem value="3">سه</SelectItem>
                      <SelectItem value="4">چهار</SelectItem>
                      <SelectItem value="5">پنج</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="meterage" className="text-right">
                  متراژ
                </Label>
                <Input
                  id="meterage"
                  className="w-52"
                  value={info.meterage}
                  onChange={(e) =>
                    setInfo({ ...info, meterage: Number(e.target.value) })
                  }
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="price" className="text-right">
                  قیمت برای هر شب (تومان)
                </Label>
                <Input
                  id="price"
                  className="w-60"
                  value={info.price_per_day}
                  onChange={(e) =>
                    setInfo({ ...info, price_per_day: Number(e.target.value) })
                  }
                />
              </div>
              <div className="flex items-center gap-5">
                <Label htmlFor="description" className="text-right">
                  توضیحات
                </Label>
                <Textarea
                  value={info.description}
                  onChange={(e) =>
                    setInfo({ ...info, description: e.target.value })
                  }
                />
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
              <Button type="submit" className="w-52 text-lg">
                ثبت
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default VillaCard;
