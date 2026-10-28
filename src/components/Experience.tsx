import { profile, type WorkProject } from "@/data/profile";
import Section, { Tag } from "./Section";
import { ArrowUpRightIcon, ChevronIcon } from "./Icons";

function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h4>
          <p className="mt-1 text-sm font-medium text-accent">{project.type}</p>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <span className="text-sm text-slate-500 dark:text-slate-400">{project.period}</span>
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
            >
              {project.link.label} <ArrowUpRightIcon />
            </a>
          )}
        </div>
      </div>

      <p className="mt-4">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-3 text-sm leading-6">
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
      </div>

      {project.caseStudies && (
        <details className="group mt-6 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-semibold text-slate-900 dark:text-white">
            Case studies: challenge → approach → impact
            <ChevronIcon className="h-4 w-4 transition-transform group-open:rotate-180" />
          </summary>
          <div className="grid gap-4 px-5 pb-5 md:grid-cols-2">
            {project.caseStudies.map((c) => (
              <div key={c.title} className="rounded-lg bg-white p-4 text-sm dark:bg-slate-900">
                <p className="font-semibold text-slate-900 dark:text-white">{c.title}</p>
                <p className="mt-3">
                  <span className="font-medium text-slate-500 dark:text-slate-400">Challenge: </span>
                  {c.challenge}
                </p>
                <p className="mt-2">
                  <span className="font-medium text-slate-500 dark:text-slate-400">Approach: </span>
                  {c.approach}
                </p>
                <p className="mt-2 font-medium text-accent">{c.impact}</p>
              </div>
            ))}
          </div>
        </details>
      )}
    </article>
  );
}

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've been building">
      {profile.experience.map((job) => (
        <div key={job.company}>
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 pb-4 dark:border-slate-800">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              {job.role} <span className="text-slate-400">·</span>{" "}
              <span className="text-accent">{job.company}</span>
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {job.location} · {job.period}
            </p>
          </div>
          <div className="mt-8 space-y-6">
            {job.projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      ))}
    </Section>
  );
}
