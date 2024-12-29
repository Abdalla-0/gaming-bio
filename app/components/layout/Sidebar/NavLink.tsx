"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { JSX } from "react/jsx-runtime";

type TLinkProps = {
  link: string;
  label: string;
  icon: JSX.Element;
};
const NavLink = ({ navLink }: { navLink: TLinkProps }) => {
  const isActive = navLink.link === usePathname();

  return (
    <Link
      href={navLink.link}
      className={`flex gap-2 items-center ${isActive ? `text-red-500` : ``} duration-300`}
    >
      <span>{React.cloneElement(navLink.icon, { className: "h-5 w-5" })}</span>
      <h6>{navLink.label}</h6>
    </Link>
  );
};

export default NavLink;
