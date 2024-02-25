import { twClass } from "@betaman/tailwind";

export const Heading3 = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLHeadingElement>,
  HTMLHeadingElement
>) => {
  return (
    <h3
      {...props}
      className={twClass(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className,
      )}
    />
  );
};
