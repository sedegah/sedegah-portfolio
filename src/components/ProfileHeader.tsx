import { Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import heroImage from "@/assets/hero.jpg";
import { Typewriter } from "react-simple-typewriter";

export const ProfileHeader = () => {
  return (
    <header className="space-y-8 mt-20">
      <div className="flex items-start gap-6">
        <Avatar className="w-16 h-16 flex-shrink-0">
          <AvatarImage src={heroImage} alt="Kimathi Sedegah" />
          <AvatarFallback className="text-foreground text-lg font-medium uppercase">
            KS
          </AvatarFallback>
        </Avatar>

        <div>
          {/* Header name in Cambria */}
          <h1 className="font-serif text-3xl font-normal mb-1 lowercase tracking-tight" style={{ fontFamily: "Cambria, serif" }}>
            kimathi sedegah
          </h1>

          {/* Typewriter text also in Cambria */}
          <p className="text-muted-foreground text-sm lowercase" style={{ fontFamily: "Cambria, serif" }}>
            <Typewriter
              words={[
                "software engineer",
                "tech enthusiast",
                "building with a purpose",
              ]}
              loop={0} // infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-foreground/80 leading-relaxed text-sm">
          I design and build{" "}
          <span className="text-foreground font-medium">intelligent systems</span>{" "}
          that blend{" "}
          <span className="text-foreground font-medium">backend engineering</span>
          , <span className="text-foreground font-medium">AI</span>, and{" "}
          <span className="text-foreground font-medium">scalable architecture</span>. 
          My work often explores how technology can improve productivity, learning,
          and real-world problem solving.
        </p>

        <p className="text-foreground/60 leading-relaxed text-sm">
          Outside of programming, I enjoy exploring new tech ideas, sharing knowledge
          through projects, gaming and playing the saxophone.
        </p>
      </div>

      <div className="flex items-center gap-16 pt-4">
        <Button
          variant="ghost"
          size="sm"
          className="lowercase text-foreground hover:text-accent hover:bg-transparent px-0 h-auto group"
          asChild
        >
          <a
            href="mailto:sedegahkim@gmail.com"
            className="flex items-center gap-2.5"
          >
            <span className="w-2 h-2 rounded-full bg-accent" />
            <Mail className="w-4 h-4" />
            <span className="underline underline-offset-4 decoration-muted-foreground/40">
              contact me
            </span>
          </a>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          className="lowercase text-muted-foreground hover:text-foreground hover:bg-transparent px-0 h-auto"
          asChild
        >
          <a href="/cv.pdf" download className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="underline underline-offset-4 decoration-muted-foreground/40">
              download cv
            </span>
          </a>
        </Button>
      </div>
    </header>
  );
};
