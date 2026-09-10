"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ShareMenu.module.css";

type ShareMenuProps = {
  title: string;
  excerpt?: string;
  path: string;
};

const SITE_URL = "https://sevengatesresearch.com";

function ShareGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 8a3 3 0 1 0-2.83-4A3 3 0 0 0 15 5c0 .18.02.36.05.53L8.9 9.08A3 3 0 1 0 9 14.86l6.08 3.52A3 3 0 1 0 16 16.65l-6.08-3.51a3 3 0 0 0 0-2.27L16 7.35c.54.41 1.24.65 2 .65Z" fill="currentColor"/></svg>;
}

function LinkGlyph() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 14.5 14.5 9m-8.2 8.7-1 1a4 4 0 0 1-5.7-5.7l3.2-3.2a4 4 0 0 1 5.7 0m7 4.4a4 4 0 0 1 0-5.7l3.2-3.2a4 4 0 1 1 5.7 5.7l-1 1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>;
}

export function ShareMenu({ title, excerpt = "", path }: ShareMenuProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const url = `${SITE_URL}${path}`;
  const shareText = excerpt ? `${title} — ${excerpt}` : title;

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  function openShareWindow(target: string) {
    window.open(target, "_blank", "noopener,noreferrer,width=760,height=640");
    setOpen(false);
  }

  async function copyLink(message = "Link copied") {
    try {
      await navigator.clipboard.writeText(url);
      setStatus(message);
    } catch {
      setStatus("Copy this URL: " + url);
    }
  }

  async function systemShare(platform?: string) {
    if (navigator.share) {
      try {
        await navigator.share({ title, text: excerpt, url });
        setOpen(false);
        return;
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") return;
      }
    }
    await copyLink(platform ? `${platform}: link copied` : "Link copied");
  }

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedText = encodeURIComponent(`${shareText}\n\n${url}`);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => { setOpen((value) => !value); setStatus(""); }}
      >
        <span className={styles.triggerIcon}><ShareGlyph /></span>
        <span>Share</span>
      </button>

      {open && <div className={styles.menu} role="menu" aria-label="Share this article">
        <div className={styles.heading}>Share this article</div>
        <div className={styles.grid}>
          <button type="button" role="menuitem" onClick={() => openShareWindow(`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`)}><span className={styles.brand}>X</span><span>X</span></button>
          <button type="button" role="menuitem" onClick={() => openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`)}><span className={styles.brand}>f</span><span>Facebook</span></button>
          <button type="button" role="menuitem" onClick={() => systemShare("Instagram")}><span className={styles.brand}>◎</span><span>Instagram</span></button>
          <button type="button" role="menuitem" onClick={() => systemShare("Snapchat")}><span className={styles.brand}>S</span><span>Snapchat</span></button>
          <button type="button" role="menuitem" onClick={() => openShareWindow(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`)}><span className={styles.brand}>in</span><span>LinkedIn</span></button>
          <button type="button" role="menuitem" onClick={() => openShareWindow(`https://wa.me/?text=${encodedText}`)}><span className={styles.brand}>W</span><span>WhatsApp</span></button>
          <a role="menuitem" href={`mailto:?subject=${encodedTitle}&body=${encodedText}`} onClick={() => setOpen(false)}><span className={styles.brand}>@</span><span>Email</span></a>
          <button type="button" role="menuitem" onClick={() => copyLink()}><span className={styles.brand}><LinkGlyph /></span><span>Copy link</span></button>
        </div>
        <button type="button" className={styles.systemShare} onClick={() => systemShare()}>
          <ShareGlyph /> More sharing options
        </button>
        <p className={styles.note}>Instagram and Snapchat use your device share sheet where supported.</p>
        {status && <p className={styles.status} aria-live="polite">{status}</p>}
      </div>}
    </div>
  );
}
