import { Button } from "@/components/ui/button";
import Image from "next/image";
import MotionItem from "../../common/MotionItem";
type TGameInfoProps = {
  title: string;
  desc: string;
  imgSrc: string;
  btnText?: string;
  btnClasses?: string;
};
const GameInfo = ({
  title,
  desc,
  imgSrc,
  btnText,
  btnClasses,
}: TGameInfoProps) => {
  return (
    <MotionItem
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.5 } }}
      className="absolute top-20 left-20 max-w-md"
    >
      <div className="w-96 h-40 relative">
        <Image src={imgSrc} alt={title} fill className="object-contain" />
      </div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-gray-300">{desc}</p>
      <Button className={`rounded-full mt-5 ${btnClasses || ""}`}>
        {btnText || "Find out more!"}
      </Button>
    </MotionItem>
  );
};

export default GameInfo;
