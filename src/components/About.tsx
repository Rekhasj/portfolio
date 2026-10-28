import { profile } from "@/data/profile";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me" muted>
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="space-y-5 text-base leading-7 lg:col-span-3">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <dl className="grid grid-cols-2 gap-4 self-start lg:col-span-2">
          {profile.stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <dt className="text-sm text-slate-500 dark:text-slate-400">{s.label}</dt>
              <dd className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
