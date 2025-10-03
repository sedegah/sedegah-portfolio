import { Link } from "react-router-dom";
import { ArrowLeft, Briefcase, GraduationCap, Award } from "lucide-react";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-2xl px-6 py-8 sm:px-8 md:px-10 lg:px-12">
        
        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-foreground sm:mb-10"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>back</span>
        </Link>

        {/* Page Title */}
        <h1 className="mb-8 text-2xl font-normal lowercase text-foreground sm:mb-10 sm:text-3xl">
          experiences
        </h1>

        {/* Experience Section */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-6 flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-medium text-foreground sm:text-xl">Experience</h2>
          </div>

          <div className="space-y-8">
            {/* Code Cadence: Back End Engineer */}
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">
                Back End Engineer
              </h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">Code Cadence • Seasonal</p>
              <p className="mb-3 text-xs text-muted-foreground sm:text-sm">Jun 2025 – Present · 5 mos</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Developing backend systems, APIs, and maintaining server-side logic for Code Cadence projects.
              </p>
            </div>

            {/* Code Cadence: IT Project Coordinator */}
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">
                Information Technology Project Coordinator
              </h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">Code Cadence • Hybrid</p>
              <p className="mb-3 text-xs text-muted-foreground sm:text-sm">Jan 2025 – Present · 10 mos</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Overseeing tech-related projects, coordinating developers, and ensuring timely project delivery.
              </p>
            </div>

            {/* STEM for Development: Student Ambassador */}
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">
                Student Ambassador
              </h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">STEM for Development • Freelance</p>
              <p className="mb-3 text-xs text-muted-foreground sm:text-sm">Feb 2025 – Present · 9 mos</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Promoting STEM education and innovation through community outreach and mentorship programs.
              </p>
            </div>

            {/* Blacks In Technology Foundation: Member */}
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">
                Member
              </h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">Blacks In Technology Foundation • Seasonal</p>
              <p className="mb-3 text-xs text-muted-foreground sm:text-sm">Mar 2025 – Present · 8 mos</p>
              <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                Engaged in community tech initiatives and events supporting diversity in technology.
              </p>
            </div>

            {/* Google Developers Group: Student Volunteer */}
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">
                Student Volunteer
              </h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">Google Developers Group • Freelance</p>
              <p className="mb-3 text-xs text-muted-foreground sm:text-sm">Dec 2024 – Jan 2025 · 2 mos</p>
              <p className="mb-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                Participated in AI & Machine Learning Jam Sessions, learning practical data analysis, model training, and workflow optimization.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-muted-foreground">Anaconda</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-muted-foreground">Docker</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-muted-foreground">Python</span>
                <span className="rounded-full bg-neutral-900 px-3 py-1 text-xs text-muted-foreground">Kaggle</span>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12 sm:mb-16">
          <div className="mb-6 flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-accent" />
            <h2 className="text-lg font-medium text-foreground sm:text-xl">Education</h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">University of Ghana</h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">Focus: Computer Science, Mathematics</p>
              <p className="text-xs text-muted-foreground sm:text-sm">2024 – 2027</p>
            </div>

            <div className="border-l-2 border-border pl-4 sm:pl-6">
              <h3 className="mb-1 text-base font-medium text-foreground sm:text-lg">Presbyterian Boys' Senior High School</h3>
              <p className="mb-2 text-sm text-secondary sm:text-base">High School Diploma, Biology/Biological Sciences</p>
              <p className="text-xs text-muted-foreground sm:text-sm">Mar 2021 – Sep 2023</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
