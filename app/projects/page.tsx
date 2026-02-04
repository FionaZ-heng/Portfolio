import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-14">
      <div className="mx-auto max-w-4xl space-y-10">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <p className="mt-2 text-gray-600">
              Selected projects focused on software design, frontend engineering, and systems.
            </p>
          </div>

          <Link className="underline text-sm" href="/">
            ← Home
          </Link>
        </header>

        <section className="grid gap-6">
          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">Sorting Visualizer</h2>
            <p className="mt-1 text-sm text-gray-600">Interactive Algorithms · Frontend</p>
            <p className="mt-4 text-gray-700">
              Interactive visualization of sorting algorithms with step-by-step playback and clear
              state transitions.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Pause / resume / reset with step-based execution</li>
              <li>State-driven rendering (data structures → UI)</li>
              <li>Extensible design for more algorithms</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
              <span className="rounded-full border px-3 py-1">React</span>
              <span className="rounded-full border px-3 py-1">TypeScript</span>
              <span className="rounded-full border px-3 py-1">Visualization</span>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">Sanguine</h2>
            <p className="mt-1 text-sm text-gray-600">Java MVC Application · OOP Design</p>
            <p className="mt-4 text-gray-700">
              Java application built with MVC architecture, focusing on abstraction boundaries and
              interface-based design.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Clean separation between model / view / controller</li>
              <li>Modular structure for maintainability</li>
              <li>Improved testability through clear interfaces</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
              <span className="rounded-full border px-3 py-1">Java</span>
              <span className="rounded-full border px-3 py-1">OOP</span>
              <span className="rounded-full border px-3 py-1">MVC</span>
            </div>
          </div>

          <div className="rounded-xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold tracking-tight">Single-Cycle RISC-V CPU</h2>
            <p className="mt-1 text-sm text-gray-600">Computer Architecture · FPGA</p>
            <p className="mt-4 text-gray-700">
              Implemented a single-cycle RISC-V CPU with a custom datapath and control logic.
            </p>
            <ul className="mt-4 list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Datapath + control logic integration</li>
              <li>Instruction execution under a single-cycle model</li>
              <li>Hardware-focused debugging mindset</li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-700">
              <span className="rounded-full border px-3 py-1">RISC-V</span>
              <span className="rounded-full border px-3 py-1">FPGA</span>
              <span className="rounded-full border px-3 py-1">Digital Logic</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
