import InputField from "@/_components/input-field";
import Image from "next/image";

export default function MainServiceList({data}) {
  
  return (
    <div className="my-ad-manage-select-term">
    <InputField type={"date"} id={"detepicker"} name="datepicker"></InputField>
    ~
    <InputField type={"date"} id={"detepicker"} name="datepicker"></InputField>
  
  </div>
  );
}
