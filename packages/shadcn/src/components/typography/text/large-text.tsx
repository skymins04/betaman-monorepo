import { twClass } from "@betaman/tailwind";

export const LargeText = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => {
  return (
    <div {...props} className={twClass("text-lg font-semibold", className)} />
  );
};
