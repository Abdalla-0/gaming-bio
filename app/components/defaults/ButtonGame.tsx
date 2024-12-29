"use client";
import Link from "next/link";
import ButtonSvg from "../common/ButtonSvg";
import Spinner from "./Spinner";

type TButtonProps = {
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
  link?: string;
  icon?: React.ReactNode;
  text: string;
};
const ButtonGame = ({
  className,
  onClick,
  link,
  icon,
  text,
  disabled = false,
}: TButtonProps) => {
  return (
    <button
      onClick={() => {
        onClick && onClick();
      }}
      disabled={disabled}
      className={`${
        className || ""
      } min-w-[100px] flex-initial gap-2 px-6 py-2 relative items-center justify-center text-gray-50 hover:text-rose-400 duration-300`}
    >
      {ButtonSvg(false)}
      <span className="relative">
        {disabled ? <Spinner /> : link ? <Link href={link}>{text}</Link> : text}
      </span>
      {icon && icon}
    </button>
  );
};

export default ButtonGame;
