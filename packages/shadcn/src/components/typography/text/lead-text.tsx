import { twClass } from "@betaman/tailwind";

export const LeadText = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return (
    <p
      {...props}
      className={twClass("text-xl text-muted-foreground", className)}
    />
  );
};
