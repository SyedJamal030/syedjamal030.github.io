import type { Stat } from "~/types";

export const stats: Stat[] = [
  { value: 5, suffix: "+", label: "Years engineering experience" },
  { value: 10, suffix: "+", label: "Production web apps shipped" },
  { value: 99, suffix: "%", label: "Lighthouse performance score" },
];

/** Headline above the stats band, split so the tail can be dimmed. */
export const statsHeading = {
  lead: "Good engineering is mostly choosing the right trade-offs,",
  tail: "then delivering clean code that scales without breaking.",
};

/**
 * Poster frame for the studio reel. Set `embedUrl` to a YouTube/Vimeo
 * privacy-friendly embed to make the play button load a real video;
 * leave it empty and the button is hidden.
 */
export const reel = {
  image: "/images/reel-poster.webp",
  alt: "Senior frontend engineer demonstrating full-stack web application features",
  width: 1000,
  height: 625,
  embedUrl: "",
  label: "Watch project walkthrough",
};
