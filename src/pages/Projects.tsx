import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  url?: string;
  status?: string;
}

interface ProjectCategory {
  title: string;
  projects: Project[];
}

const projectCategories: ProjectCategory[] = [
  {
    title: 'Developer Tools & CLI Projects',
    projects: [
      {
        name: 'HttpLogR',
        description: 'CLI tool to analyze website response behavior.',
        url: 'https://github.com/sedegah/HttpLogR',
      },
      {
        name: 'ConvoCLI (Client)',
        description: 'Terminal-based client for managing conversations.',
        url: 'https://github.com/sedegah/ConvoCLI-Client',
      },
      {
        name: 'ConvoCLI (Server)',
        description: 'Server component for ConvoCLI ecosystem.',
        url: 'https://github.com/sedegah/ConvoCLI-Server',
      },
      {
        name: 'Sentinel-D1',
        description: 'Async download manager with live terminal dashboard.',
        url: 'https://github.com/sedegah/Sentinel-D1',
      },
      {
        name: 'Tabulyst',
        description: 'Explore and convert CSV files into SQL schemas.',
        url: 'https://github.com/sedegah/Tabulyst',
      },
      {
        name: 'Nav--Accra',
        description: "Haskell app implementing Dijkstra's shortest path for Accra routes.",
        url: 'https://github.com/sedegah/Nav--Accra',
      },
      {
        name: 'NoCaptive 1.0',
        description: 'Detect captive portals and confirm open internet access.',
        url: 'https://github.com/sedegah/NoCaptive',
      },
      {
        name: 'Sentinel',
        description: 'Real-time DoS attack detection & mitigation.',
        url: 'https://github.com/sedegah/Sentinel',
      },
      {
        name: 'Cron-tool',
        description: 'Converts natural language scheduling expressions into cron jobs.',
        url: 'https://github.com/sedegah/Cron-tool',
      },
      {
        name: 'MD2HTML',
        description: 'Convert Markdown files to styled HTML.',
        url: 'https://github.com/sedegah/MD2HTML',
      },
      {
        name: 'N8N-Tools',
        description: 'n8n workflows for uptime monitoring of free-tier services.',
        url: 'https://github.com/sedegah/N8N-Tools',
      },
      {
        name: 'SysVerge',
        description: 'Java-based system analyzer using OSHI.',
        url: 'https://github.com/sedegah/SysVerge',
      },
      {
        name: 'Statix',
        description: 'Haskell CLI tool for codebase statistics.',
        url: 'https://github.com/sedegah/Statix',
      },
      {
        name: 'ZigScan',
        description: 'Unicode scanner in Zig for detecting confusable characters.',
        url: 'https://github.com/sedegah/ZigScan',
      },
    ],
  },
  {
    title: 'Web Applications',
    projects: [
      {
        name: 'Code Comparator',
        description: 'AI-powered tool for comparing code snippets, visualizing diffs, and integrating with CI pipelines.',
        url: 'https://codecomparator.vercel.app',
      },
      {
        name: 'Daily Scope News',
        description: 'Frontend-only news site delivering real-time updates from multiple sources.',
        url: 'https://daily-scope-news.vercel.app',
      },
      {
        name: 'SceneRadar',
        description: 'Platform for discovering trending movies, shows, and reviews.',
        url: 'https://sceneradar.onrender.com',
      },
      {
        name: 'Updevted',
        description: 'Curates tech news, GitHub trends, and career insights.',
        url: 'https://updevted.onrender.com',
      },
      {
        name: 'Sustainability Hub',
        description: 'Platform to map sustainability initiatives, events, and projects.',
        url: 'https://sustainabilityhub.netlify.app',
      },
      {
        name: 'Checkmate Arena',
        description: 'Online chess + puzzles platform with Sudoku and Solitaire.',
        url: 'https://checkmatearena-nikm.onrender.com',
      },
      {
        name: 'Unique Child Academy Website',
        description: 'Customized school website for UCA.',
        url: 'https://uniquechildacademy.vercel.app',
      },
      {
        name: 'Code Cadence',
        description: 'Business website for a company I founded, Code Cadence.',
        url: 'https://codecadence.vercel.app',
      },
      {
        name: 'Cadence V2',
        description: 'Enhanced version of Code Cadence with new features.',
        url: 'https://cadencev2.vercel.app',
      },
    ],
  },
  {
    title: 'Academic & Research Projects',
    projects: [
      {
        name: 'COBOL Chronicles',
        description: 'Learning COBOL through progressive examples.',
        url: 'https://github.com/sedegah/COBOL-Chronicles',
      },
      {
        name: 'TimeTableGen',
        description: 'Prolog-based university timetable generator.',
        url: 'https://github.com/sedegah/TimeTableGen',
      },
      {
        name: 'AlgoGraphBot (Java)',
        description: 'Telegram bot that visualizes algorithms.',
        url: 'https://github.com/sedegah/AlgoGraphBot',
      },
      {
        name: 'CABS (Accounting in Prolog)',
        description: 'Solves partnership-based accounting problems.',
        status: 'Private – no public link yet',
      },
    ],
  },
  {
    title: 'Bots & Automation',
    projects: [
      {
        name: 'GigaRandoBot',
        description: 'Telegram bot for random number generation.',
        url: 'https://github.com/sedegah/GigaRandoBot',
      },
      {
        name: 'TuneTrainer',
        description: 'Detects pitch accuracy from sung/played notes.',
        url: 'https://github.com/sedegah/TuneTrainer',
        status: 'Planned',
      },
      {
        name: 'Event Whisper',
        description: 'AI-driven event discovery assistant.',
        url: 'https://github.com/sedegah/Event-Whisper',
        status: 'Coming Soon',
      },
      {
        name: 'Job Watch',
        description: 'AI automation for tech job matching & applications.',
        status: 'Private – Java MVP in progress',
      },
      {
        name: 'EmotionLens',
        description: 'Detects stress/fatigue via webcam facial analysis.',
        url: 'https://github.com/sedegah/EmotionLens',
        status: 'Planned',
      },
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background flex items-start justify-center px-6 py-12">
      <main className="max-w-2xl w-full">
        <Link
          to="/"
          className="group mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors duration-300 hover:text-foreground text-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="lowercase">back to home</span>
        </Link>

        <h1 className="mb-2 text-3xl font-normal lowercase text-foreground">
          projects
        </h1>
        <p className="mb-10 text-muted-foreground text-base">
          A collection of my work across web development, CLI tools, research, and automation.
        </p>

        <div className="space-y-12">
          {projectCategories.map((category, categoryIndex) => (
            <section key={categoryIndex}>
              <h2 className="mb-5 font-medium text-foreground text-lg">
                {category.title}
              </h2>
              <div className="space-y-5">
                {category.projects.map((project, projectIndex) => (
                  <div
                    key={projectIndex}
                    className="group border-l-2 border-border pl-4 transition-all duration-300 hover:border-accent"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <h3 className="mb-1 font-medium text-foreground text-base transition-colors duration-300 group-hover:text-accent">
                          {project.name}
                        </h3>
                        <p className="leading-relaxed text-muted-foreground text-sm">
                          {project.description}
                        </p>
                        {project.status && (
                          <span className="mt-1 inline-block text-xs text-muted-foreground/70">
                            {project.status}
                          </span>
                        )}
                      </div>
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 text-muted-foreground transition-colors duration-300 hover:text-accent"
                          aria-label={`Visit ${project.name}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-6">
          <p className="text-muted-foreground text-sm">
            For more projects and source code, visit my{' '}
            <a
              href="https://github.com/sedegah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline transition-colors duration-300 hover:text-accent"
            >
              GitHub profile
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
};

export default Projects;
