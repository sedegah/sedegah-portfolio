interface SectionLinkProps {
  title: string;
  onClick: () => void;
}

export const SectionLink = ({ title, onClick }: SectionLinkProps) => {
  return (
    <button
      onClick={onClick}
      className="text-muted-foreground hover:text-foreground lowercase text-base underline underline-offset-4 decoration-muted/40 hover:decoration-foreground transition-colors text-left"
    >
      {title}
    </button>
  );
};
