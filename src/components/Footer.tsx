import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:px-6 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Built with Next.js, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}
