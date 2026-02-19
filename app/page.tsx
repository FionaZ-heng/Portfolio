import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-14 bg-glow">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero */}
        <header className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold tracking-tight text-gray-900">
              Yutong (Fiona) Zheng
            </h1>
            <div className="name-underline" />
            <div className="brand-badge">
              Software Engineer · Frontend & Full-Stack
            </div>

            <p className="mt-6 text-lg text-gray-700 max-w-2xl leading-relaxed">
              I’m a Computer Science student at Northeastern University
              focused on building thoughtful, interactive web applications.
              I enjoy turning complex systems into intuitive user experiences
              while keeping code modular, testable, and scalable.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:opacity-90 btn-brand btn-lift btn-focus"
              >
                View Projects <span aria-hidden>→</span>
              </Link>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-50 btn-lift btn-focus"
              >
                Download Resume <span aria-hidden>↗</span>
              </a>

              <a
                href="mailto:zheng.yuton@northeastern.edu"
                className="inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-50 btn-lift btn-focus"
              >
                Email Me
              </a>
            </div>

            <p className="text-sm text-gray-600">
              React · Next.js · TypeScript · Java · C · Linux · OOP / MVC · Systems
            </p>

            <p className="text-sm text-gray-600 max-w-2xl">
              Recent work: Sorting Visualizer (step-by-step execution, pause/resume) · Java MVC projects with clean interfaces and separation of concerns.
            </p>

            <div className="flex flex-wrap gap-4 text-sm pt-1">
              <a
                className="underline"
                href="https://github.com/FionaZ-heng"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="underline"
                href="https://www.linkedin.com/in/yutong-fiona-zheng"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <Link className="underline" href="/projects">
                Projects
              </Link>
            </div>
          </div>
        </header>


        {/* Featured */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Featured Project
            </h2>
            <p className="text-gray-600">
              One project I’m actively building and improving.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm card-hover">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Sorting Visualizer
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Interactive Algorithms · Frontend
                </p>
              </div>

              <span className="rounded-full border px-3 py-1 text-xs text-gray-700">
                In progress
              </span>
            </div>

            <p className="mt-4 text-gray-700">
              Interactive visualization of sorting algorithms with step-by-step execution,
              pause/resume controls, and state-driven UI updates.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                className="inline-flex items-center gap-1 rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:opacity-90 btn-brand"
                href="/projects"
              >
                View project <span aria-hidden>→</span>
              </Link>

              <a
                className="inline-flex items-center gap-1 rounded-lg border px-4 py-2 text-sm transition hover:bg-gray-50"
                href="https://github.com/FionaZ-heng/Sorting-Visualizer"
                target="_blank"
                rel="noreferrer"
              >
                Repo <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* Projects preview */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="text-gray-600">
              A few highlights—full details and links are on the Projects page.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-xl border bg-white p-6 shadow-sm card-hover">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">Sanguine</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Java MVC Application · OOP Design
                  </p>
                </div>

                <a
                  className="text-sm underline"
                  href="https://github.com/FionaZ-heng/cs3100"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repo ↗
                </a>
              </div>

              <p className="mt-4 text-gray-700">
                Object-oriented Java application emphasizing clean separation of concerns
                and interface-based design.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm card-hover">
              <h3 className="text-xl font-semibold tracking-tight">
                Single-Cycle RISC-V CPU
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Computer Architecture · FPGA
              </p>
              <p className="mt-4 text-gray-700">
                FPGA implementation of a single-cycle RISC-V processor with a custom datapath
                and control logic.
              </p>
            </div>
          </div>

          <div>
            <Link className="underline text-sm" href="/projects">
              View all projects <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        {/* Skills */}
        <section className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
          <p className="text-gray-700">
            Java · C · Python · React / Next.js · Git · Linux · LaTeX
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-4 text-sm text-gray-500">
          Built with Next.js · Deployed on Vercel
        </footer>
      </div>
    </main>
  );
}
