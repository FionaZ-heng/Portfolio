export default function Home() {
  return (
    <main className="min-h-screen px-6 py-14 bg-white">
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">
            Yutong (Fiona) Zheng
          </h1>
          <p className="text-lg text-gray-600">
            CS @ Northeastern · SWE / Frontend · Java, React, Linux
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
            <a className="underline" href="/projects">
              Projects
            </a>
          </div>
        </header>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Featured</h2>
          <p className="text-gray-700">
            <strong>Sorting Visualizer</strong> — Interactive visualization of
            sorting algorithms with step-by-step playback and clear state
            transitions. (In progress)
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Sanguine (Java MVC)</strong> — OOP design with clean
              separation of model/view/controller and interface-based architecture.
            </li>
            <li>
              <strong>Single-Cycle RISC-V CPU</strong> — FPGA implementation with
              custom datapath and control logic.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <p className="text-gray-700">
            Java · C · Python · React/Next.js · Git · Linux · LaTeX
          </p>
        </section>
      </div>
    </main>
  );
}
