import { cn } from "@/lib/utils";

const MaxWidthWrapper = ({
  children,
  className,
  noPadding,
}: {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}) => {
  return (
    <section
      className={cn(
        ["w-full max-w-[1375px] py-5 px-10"],
        className || "",
        { "py-0": noPadding },
        { "py-8": !noPadding }
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
