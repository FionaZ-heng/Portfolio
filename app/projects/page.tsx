import Link from "next/link";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  tags: string[];
  links?: {
    repo?: string;
    demo?: string;
  };
  status?: "In progress" | "Shipped";
};

const PROJECTS: Project[] = [
  {
    title: "Sorting Visualizer",
    subtitle: "Interactive Algorithms · Frontend",
    description:
      "Interactive visualization of sorting algorithms with step-by-step playback and clear state transitions.",
    bullets: [
      "Step-based execution with pause / resume / reset controls",
      "State-driven rendering that maps algorithm logic directly to UI updates",
      "Designed to be extensible for adding more algorithms and visual styles",
    ],
    tags: ["React", "TypeScript", "Visualization"],
    status: "In progress",
    links: {
      repo: "https://github.com/FionaZ-heng/Sorting-Visualizer",
      // demo: "https://sorting-visualizer.vercel.app" // 之后有了再加
    },
  },
  {
    title: "Sanguine",
    subtitle: "Java MVC Application · OOP Design",
    description:
      "Java application built with MVC architecture, focusing on clean abstraction boundaries and interface-based design.",
    bullets: [
      "Clean separation between model / view / controller layers",
      "Modular architecture for maintainability and testability",
      "Interface-driven design to decouple implementation details",
    ],
    tags: ["Java", "OOP", "MVC"],
    status: "Shipped",
    links: {
      repo: "https://github.com/FionaZ-heng/cs3100",
    },
  },
  {
    title: "Single-Cycle RISC-V CPU",
    subtitle: "Computer Architecture · FPGA",
    description:
      "Implemented a single-cycle RISC-V CPU with a custom datapath and control logic.",
    bullets: [
      "Custom datapath + control logic integration",
      "Instruction execution under a single-cycle model",
      "Hardware-focused debugging and verification mindset",
    ],
    tags: ["RISC-V", "FPGA", "Digital Logic"],
    status: "Shipped",
    links: {
      repo: "https://github.com/FionaZ-heng/cs3100",
    },
  },
];

function Tag({ text }: { text: string }) {
  return <span className="rounded-full border px-3 py-1 text-xs">{text}</span>;
}

function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className="inline-flex items-center gap-1 rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 transition"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
      <span aria-hidden>↗</span>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="text-gray-600">
              Selected projects focused on software design, frontend engineering, and systems.
            </p>
          </div>

          <Link className="underline text-sm mt-1" href="/">
            ← Home
          </Link>
        </header>

        <section className="grid gap-6">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{p.title}</h2>
                  <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
                </div>

                {p.status && (
                  <span className="rounded-full border px-3 py-1 text-xs text-gray-700">
                    {p.status}
                  </span>
                )}
              </div>

              <p className="mt-4 text-gray-700">{p.description}</p>

              <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2 text-gray-700">
                {p.tags.map((t) => (
                  <Tag key={t} text={t} />
                ))}
              </div>

              {(p.links?.repo || p.links?.demo) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.links.repo && <LinkButton href={p.links.repo}>Repo</LinkButton>}
                  {p.links.demo && <LinkButton href={p.links.demo}>Live Demo</LinkButton>}
                </div>
              )}
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
