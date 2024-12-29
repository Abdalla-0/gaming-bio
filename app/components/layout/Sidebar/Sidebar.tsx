import { BsFillPeopleFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import NavLink from "./NavLink";
import { IoGameController } from "react-icons/io5";
import Logo from "../../defaults/Logo";

const NAV_LINKS = [
  {
    link: "/",
    label: "Home",
    icon: <GoHomeFill />,
  },
  {
    link: "/games",
    label: "Games",
    icon: <IoGameController />,
  },
  {
    link: "/category",
    label: "Category",
    icon: <MdDashboard />,
  },
  {
    link: "/wishlist",
    label: "Wishlist",
    icon: <FaHeart />,
  },
  {
    link: "/friends",
    label: "Friends",
    icon: <BsFillPeopleFill />,
  },
];
const Sidebar = () => {
  return (
    <div className="col-span-2">
      <div className="flex flex-col gap-3 h-screen sticky inset-0 text-gray-50 bg-black/30 py-5 px-10">
        <Logo />
        {NAV_LINKS.map((navLink, index) => (
          <NavLink key={index} navLink={navLink} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
