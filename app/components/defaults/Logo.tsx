import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={`flex gap-2 text-xl lg:text-2xl font-bold ${className}`}
    >
      <h1 className="text-rose-500">Gaming</h1>
      <span>Hub</span>
    </Link>
  );
};

export default Logo;
