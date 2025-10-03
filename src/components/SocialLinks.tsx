import { Github, Linkedin, Mail } from "lucide-react"; 

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[18px] h-[18px]"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const SocialLinks = () => {
  const links = [
    { icon: Github, href: "https://github.com/sedegah", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/kimathi-sedegah", label: "LinkedIn" },
    { icon: XIcon, href: "https://twitter.com/heiskimathi", label: "X" },
    { icon: Mail, href: "mailto:sedegahkim@gmail.com", label: "Email" },
  ];

  return (
    <div className="flex items-center gap-5">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={link.label}
        >
          <link.icon className="w-[18px] h-[18px]" />
        </a>
      ))}
    </div>
  );
};
