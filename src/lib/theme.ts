"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY as STORAGE_KEY } from "@/lib/theme-script";

export type Theme = "light" | "dark";
// Strong ease-in-out: this is movement across the whole screen, not a small UI reaction.
const WIPE_EASING = "cubic-bezier(0.77, 0, 0.175, 1)";
const WIPE_MS = 650;


function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getSnapshot = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

export function useTheme(): Theme {
  return useSyncExternalStore(subscribe, getSnapshot, () => "light");
}

/**
 * Switch theme with a clip-path wipe: light -> dark reveals left to right,
 * dark -> light reveals right to left. Falls back to an instant swap when
 * View Transitions are unsupported or the user prefers reduced motion.
 */
export function setTheme(next: Theme) {
  const root = document.documentElement;
  const apply = () => {
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  };

  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!document.startViewTransition || reduceMotion) {
    apply();
    return;
  }

  const toDark = next === "dark";
  const transition = document.startViewTransition(apply);
  transition.ready.then(() => {
    root.animate(
      {
        clipPath: toDark
          ? ["inset(0 100% 0 0)", "inset(0 0 0 0)"] // grows from the left edge
          : ["inset(0 0 0 100%)", "inset(0 0 0 0)"], // grows from the right edge
      },
      { duration: WIPE_MS, easing: WIPE_EASING, pseudoElement: "::view-transition-new(root)" },
    );
  });
}

export const toggleTheme = () => setTheme(getSnapshot() === "dark" ? "light" : "dark");
