import { profile } from "@/data/profile";
import Section, { Tag } from "./Section";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Personal projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.personalProjects.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-6">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 text-sm font-medium">
              <a
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-accent dark:text-slate-200"
              >
                <GitHubIcon className="h-4 w-4" /> Code
              </a>
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  Live demo <ArrowUpRightIcon />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 text-center">
        <a
          href="https://github.com/Rekhasj?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
        >
          See all repositories on GitHub <ArrowUpRightIcon />
        </a>
      </p>
    </Section>
  );
}
