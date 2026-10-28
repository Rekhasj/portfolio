type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  muted?: boolean;
};

export default function Section({ id, eyebrow, title, children, muted }: SectionProps) {
  return (
    <section id={id} className={muted ? "bg-slate-50 dark:bg-slate-900/40" : undefined}>
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
      {children}
    </span>
  );
}
