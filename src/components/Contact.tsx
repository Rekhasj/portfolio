import { profile } from "@/data/profile";
import Section from "./Section";
import { MailIcon, socialIcon } from "./Icons";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together" muted>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <p className="max-w-md text-base leading-7">
            I&apos;m looking for frontend and React Native roles where I can build products people rely on every day.
            The quickest way to reach me is email.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 dark:text-slate-950"
          >
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </a>
          <div className="mt-6 flex gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-accent hover:text-accent dark:border-slate-700 dark:text-slate-200"
              >
                {socialIcon(s.label, "h-4 w-4")} {s.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">Education</h3>
          <ul className="mt-4 space-y-4">
            {profile.education.map((e) => (
              <li
                key={e.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
              >
                <p className="font-medium text-slate-900 dark:text-white">{e.title}</p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {e.place} · {e.period}
                  {e.note && ` · ${e.note}`}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
