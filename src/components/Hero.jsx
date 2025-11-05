import React from 'react';
import { Mic, PlayCircle } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_40%_60%,rgba(99,102,241,0.12),transparent_35%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-28 md:py-32 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-wider text-slate-300">
            Used by researchers, product teams, and agencies.
          </p>
          <h1 className="font-semibold leading-tight text-white text-4xl sm:text-5xl md:text-6xl">
            Write, format, and finish documents — without lifting a finger.
          </h1>
          <p className="mt-4 text-lg text-slate-200 md:text-xl">
            An AI-first document workspace. Talk to your doc, generate research, reports, presentations and polished PDFs — and let AI handle every keystroke, layout and citation.
          </p>

          <ul className="mt-6 space-y-2 text-slate-200">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-400" />
              Generate research papers, reports, presentations and essays in minutes.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-violet-400" />
              Chat with your document — ask it to expand, summarize, or reformat.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              One-click export to DOCX / PDF / PPTX with polished formatting.
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#get-started"
              className="rounded-md bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Get started — it writes for you
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              <PlayCircle className="h-5 w-5" />
              Watch demo
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-slate-300">
            <Mic className="h-4 w-4 text-cyan-300" />
            <span>Say “Create a 1500-word executive summary about solar microgrids” or start from a template.</span>
          </div>
        </div>

        <div className="relative mt-6 w-full flex-1 lg:mt-0">
          <div className="pointer-events-none absolute -inset-12 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/60">
              {/* Visual hint of canvas + chat layout */}
              <div className="grid h-full grid-cols-12">
                <div className="col-span-8 p-4">
                  <div className="mb-3 h-4 w-2/3 rounded bg-white/10" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-white/10" />
                    <div className="h-3 w-5/6 rounded bg-white/10" />
                    <div className="h-3 w-4/6 rounded bg-white/10" />
                    <div className="h-3 w-3/6 rounded bg-white/10" />
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-cyan-500/20 px-3 py-1.5 text-sm text-cyan-100">
                    <span>Format → Corporate</span>
                  </div>
                </div>
                <div className="col-span-4 border-l border-white/10 p-4">
                  <div className="mb-2 h-4 w-1/2 rounded bg-white/10" />
                  <div className="space-y-2">
                    <div className="h-3 w-full rounded bg-white/10" />
                    <div className="h-3 w-5/6 rounded bg-white/10" />
                    <div className="h-3 w-4/6 rounded bg-white/10" />
                  </div>
                  <div className="mt-3 rounded-md border border-cyan-500/30 bg-cyan-500/10 p-2 text-xs text-cyan-100">
                    “Make this suitable for executives.”
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
