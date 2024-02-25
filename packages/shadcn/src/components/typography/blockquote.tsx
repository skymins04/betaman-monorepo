export const Blockquote = ({
  className,
  ...props
}: React.DetailedHTMLProps<
  React.BlockquoteHTMLAttributes<HTMLQuoteElement>,
  HTMLQuoteElement
>) => {
  return <blockquote {...props} className="mt-6 border-l-2 pl-6 italic" />;
};
