import { twClass } from "@betaman/tailwind";

export const Paragraph = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return (
    <p
      {...props}
      className={twClass("leading-7 [&:not(:first-child)]:mt-6", className)}
    />
  );
};
