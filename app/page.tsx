import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Hero */}
        <header className="space-y-4">
          <h1 className="text-4xl font-semibold tracking-tight">
            Yutong (Fiona) Zheng
          </h1>

          <div className="space-y-1">
            <p className="text-lg text-gray-700">
              Computer Science @ Northeastern University
            </p>
            <p className="text-lg text-gray-600">
              Software Engineer · Frontend / Systems
            </p>
          </div>

          <p className="text-sm text-gray-600">
            Java · React · Next.js · TypeScript · Linux
          </p>

          <div className="flex flex-wrap gap-4 text-sm">
            <a className="underline" href="mailto:zheng.yuton@northeastern.edu">
              Email
            </a>

            <a
              className="underline"
              href="https://github.com/FionaZ-heng"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <Link className="underline" href="/projects">
              Projects
            </Link>
          </div>
        </header>

        {/* Featured */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Featured Project</h2>
            <p className="text-gray-600">
              One project I’m actively building and improving.
            </p>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">Sorting Visualizer</h3>
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
                className="inline-flex items-center gap-1 rounded-lg bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
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
            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">Sanguine</h3>
              <p className="mt-1 text-sm text-gray-600">Java MVC Application · OOP Design</p>
              <p className="mt-4 text-gray-700">
                Object-oriented Java application emphasizing clean separation of concerns
                and interface-based design.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold tracking-tight">Single-Cycle RISC-V CPU</h3>
              <p className="mt-1 text-sm text-gray-600">Computer Architecture · FPGA</p>
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
