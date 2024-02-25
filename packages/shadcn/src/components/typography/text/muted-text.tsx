import { twClass } from "@betaman/tailwind";

export const MutedText = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return (
    <p
      {...props}
      className={twClass("text-sm text-muted-foreground", className)}
    />
  );
};
