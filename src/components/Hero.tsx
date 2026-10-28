import { profile } from "@/data/profile";
import { DownloadIcon, PinIcon, socialIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 mx-auto h-96 max-w-3xl rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-900/30"
      />
      <div className="mx-auto max-w-5xl px-4 pb-20 pt-20 sm:px-6 sm:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-sm font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Open to new opportunities
        </p>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
          Hi, I&apos;m {profile.name}.
          <br />
          <span className="text-slate-500 dark:text-slate-400">{profile.role}.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8">{profile.tagline}</p>

        <p className="mt-4 inline-flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
          <PinIcon className="h-4 w-4" />
          {profile.location}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90 dark:text-slate-950"
          >
            View my work
          </a>
          <a
            href={profile.resume}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-100"
          >
            <DownloadIcon className="h-4 w-4" />
            Download resume
          </a>
          <div className="ml-1 flex items-center gap-1">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="rounded-lg p-2.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-accent dark:hover:bg-slate-800"
              >
                {socialIcon(s.label)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
