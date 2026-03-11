import { Home, Github, Linkedin, Twitter, FileText } from "lucide-react";
import Link from "next/link";

const dockItems = [
  { icon: Home, href: "#", label: "Home" },
  { icon: Github, href: "https://github.com/Shivathmika20", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/y-shivathmika/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/_shivathmika", label: "X / Twitter" },

];

const DockNav = () => {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 px-3 py-2 rounded-full bg-background border border-border shadow-lg">
        {dockItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            aria-label={item.label}
            target="main"
            className="p-2.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-150"
          >
            <item.icon className="w-4 h-4" />
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default DockNav;
