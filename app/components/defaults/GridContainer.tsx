const GridContainer = ({
  children,
  cols,
  className,
}: {
  children: React.ReactNode;
  cols: number;
  className?: string;
}) => {
  const gridClasses =
    {
      1: "grid grid-cols-1",
      2: "grid grid-cols-2",
      3: "grid grid-cols-3",
      4: "grid grid-cols-4",
      5: "grid grid-cols-5",
      6: "grid grid-cols-6",
      7: "grid grid-cols-7",
      8: "grid grid-cols-8",
      9: "grid grid-cols-9",
      10: "grid grid-cols-10",
      11: "grid grid-cols-11",
      12: "grid grid-cols-12",
    }[cols] || `grid grid-cols-4`;

  return <div className={`${gridClasses} ${className || ``}`}>{children}</div>;
};

export default GridContainer;
