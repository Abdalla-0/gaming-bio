import { SearchIcon } from "lucide-react";

const HeaderSearch = () => {
  return (
    <div className="flex items-center gap-2 bg-[#333839] w-full md:w-[40%] px-4 rounded-xl border border-input group">
      <input className="py-2 w-full bg-transparent text-sm text-gray-50 border-none outline-none active:outline-none ring-0 placeholder:text-gray-400" />
      <SearchIcon className="h-5 w-5 text-gray-50 group-hover:text-rose-400 cursor-pointer duration-300"/>
    </div>
  );
};

export default HeaderSearch;
