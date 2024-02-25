import { twClass } from "@betaman/tailwind";

export const Heading4 = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h4
      {...props}
      className={twClass(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className,
      )}
    />
  );
};
