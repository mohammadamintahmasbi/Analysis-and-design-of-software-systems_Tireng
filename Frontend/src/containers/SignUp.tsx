import Form from "@/components/Form";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const SignUp = () => {
  return (
    <div className="h-screen flex flex-col gap-10 justify-center items-center">
      <Form />
      <RadioGroup defaultValue="admin">
        <div className="flex gap-10">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="admin" id="admin" />
            <Label htmlFor="admin">میزبان</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="user" id="user" />
            <Label htmlFor="user">کاربر</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
};

export default SignUp;
