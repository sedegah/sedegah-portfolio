import { ProfileHeader } from "@/components/ProfileHeader";
import { SocialLinks } from "@/components/SocialLinks";
import { Clock } from "@/components/Clock";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
      >
        Skip to main content
      </a>
      
      <main id="main-content" className="max-w-2xl w-full">
        <div className="space-y-16">
          <ProfileHeader />
          
          <nav className="flex flex-col gap-4">
            <Link 
              to="/projects" 
              className="text-foreground hover:text-accent transition-colors lowercase underline underline-offset-4 decoration-muted-foreground/40 w-fit"
            >
              projects
            </Link>
            <Link 
              to="/experiences" 
              className="text-foreground hover:text-accent transition-colors lowercase underline underline-offset-4 decoration-muted-foreground/40 w-fit"
            >
              experiences
            </Link>
          </nav>
          
          <div className="flex items-center justify-between pt-8">
            <SocialLinks />
            <Clock />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
