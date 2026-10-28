import { profile } from "@/data/profile";
import Section, { Tag } from "./Section";

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I work with" muted>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {profile.skills.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
