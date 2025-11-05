import React from 'react';
import { MessageSquare, FileText, Wand2, BookOpen, Presentation, Mic, Users, Download, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'AI Chat Editor',
    desc: 'Chat with your document. Ask to summarize, expand, or change tone and watch updates apply live.',
    micro: 'Chip animations highlight modified lines briefly.'
  },
  {
    icon: FileText,
    title: 'Autonomous Drafting',
    desc: 'Describe topic, tone and length — get full drafts with suggested citations without typing.',
    micro: 'Progress pulse while drafting.'
  },
  {
    icon: Wand2,
    title: 'One-click Formatting',
    desc: 'Pick Academic, Corporate, Clean, or Creative — headings, lists and tables are reflowed instantly.',
    micro: 'Live preview of style change.'
  },
  {
    icon: BookOpen,
    title: 'Citations & References',
    desc: 'Auto-generate in-text citations (APA/MLA/IEEE) and a bibliography with link validation.',
    micro: 'Tap to validate each source.'
  },
  {
    icon: Presentation,
    title: 'Slide Generator',
    desc: 'Turn any doc into a slide deck with key points, visuals, and speaker notes.',
    micro: '“Create slides” quick action.'
  },
  {
    icon: Mic,
    title: 'Voice & Multimodal',
    desc: 'Speak ideas or upload images — AI transcribes and weaves captions and figure legends.',
    micro: 'Waveform while recording.'
  },
  {
    icon: Users,
    title: 'Collaboration & Versioning',
    desc: 'Real-time editing, comments, suggested edits, and revert to AI draft.',
    micro: 'Accept / Edit / Reject controls.'
  },
  {
    icon: Download,
    title: 'Exports & Templates',
    desc: 'Export DOCX, PDF, PPTX, LaTeX. Use built-in or brand templates for consistent styling.',
    micro: 'Success banner after export.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy & Compliance',
    desc: 'TLS in transit, AES-256 at rest, SSO and on‑prem/VPC options for enterprise.',
    micro: 'Admin policies and auditing.'
  }
];

export default function Features() {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Core features</h2>
          <p className="mt-3 text-slate-300">Everything you need to go from idea to finished report — fast.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-cyan-500/15 p-3 text-cyan-300 ring-1 ring-cyan-400/20">
                  <f.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                  <p className="mt-3 text-xs text-slate-400">{f.micro}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
