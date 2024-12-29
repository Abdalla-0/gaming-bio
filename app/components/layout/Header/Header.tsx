import ButtonGame from "../../defaults/ButtonGame";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <HeaderSearch />
      <div className="flex gap-3">
        <ButtonGame text="Login" disabled={false} link="/login" />
        <ButtonGame text="Sign up" link="/signup" />
      </div>
    </header>
  );
};

export default Header;
