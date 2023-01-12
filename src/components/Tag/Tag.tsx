interface ITagProps {
  children: React.ReactNode;
}

function Tag({ children }: ITagProps) {
  return <div data-testid="tag-testid">{children}</div>;
}

export default Tag;
