import React from 'react';
import { ArrowRight, FileText, MessageSquare, Wand2 } from 'lucide-react';

const steps = [
  {
    title: 'Tell IntelliDocs your goal',
    desc: 'Topic, length, tone, and audience — or paste notes and upload files.',
    icon: FileText,
  },
  {
    title: 'AI drafts & cites',
    desc: 'Get a first draft with suggested citations and figures.',
    icon: Wand2,
  },
  {
    title: 'Chat to refine',
    desc: '“Shorten intro,” “Add 2 references,” “Convert to slides.” Changes apply live.',
    icon: MessageSquare,
  },
  {
    title: 'Format & export',
    desc: 'Pick a style and export in one click (DOCX, PDF, PPTX, LaTeX).',
    icon: ArrowRight,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-slate-300">Four simple steps to go from idea to polished output.</p>
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-400/30">{i + 1}</span>
                <s.icon className="h-5 w-5 text-cyan-300" />
              </div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-white/10 bg-white/5 p-4 text-center text-slate-200">
          Say ‘Create a 1,500‑word executive summary about solar microgrids’ or click ‘Start from template’.
        </div>
      </div>
    </section>
  );
}
