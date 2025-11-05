import React from 'react';

export default function TrustBar() {
  return (
    <section className="bg-slate-950 py-10 text-slate-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-wider text-slate-400">Trusted by</p>
            <p className="mt-1 text-xl font-medium text-white">Harvard • Acme • OpenSource Labs</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
            <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200 ring-1 ring-white/10">Avg. doc creation time: 6 minutes</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200 ring-1 ring-white/10">Citations auto-linked</span>
            <span className="rounded-full bg-white/5 px-3 py-1 text-slate-200 ring-1 ring-white/10">SSO & Enterprise security</span>
          </div>
        </div>
      </div>
    </section>
  );
}
