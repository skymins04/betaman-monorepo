import { twClass } from "@betaman/tailwind";

export const SmallText = ({
  className,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <small
      {...props}
      className={twClass("text-sm font-medium leading-none", className)}
    />
  );
};
