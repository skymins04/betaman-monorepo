import { twClass } from "@betaman/tailwind";

export const UnorderedList = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>) => {
  return (
    <ul
      {...props}
      className={twClass("my-6 ml-6 list-disc [&>li]:mt-2", className)}
    />
  );
};
