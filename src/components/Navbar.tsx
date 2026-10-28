"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
          {profile.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-600 transition-colors hover:text-accent dark:text-slate-300">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-slate-900 px-4 py-2 text-white transition-colors hover:bg-accent dark:bg-white dark:text-slate-900 dark:hover:bg-accent"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="text-slate-700 md:hidden dark:text-slate-200"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-slate-200 px-4 py-3 md:hidden dark:border-slate-800">
          {[...links, { href: profile.resume, label: "Resume" }].map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2 font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
