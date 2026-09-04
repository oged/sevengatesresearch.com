"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/nav";

function isActive(pathname: string, href: string) {
  if (href === "/briefing") return pathname === "/briefing" || /^\/briefing\/\d{4}-\d{2}-\d{2}$/.test(pathname);
  if (href === "/briefing/archive") return pathname === "/briefing/archive";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Close the panel whenever navigation lands on a new page.
  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav
        id="primary-navigation"
        ref={navRef}
        className={open ? "site-nav is-open" : "site-nav"}
        aria-label="Primary"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            aria-current={isActive(pathname, link.href) ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
