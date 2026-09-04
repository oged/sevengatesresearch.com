import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Seven Gates Research",
    short_name: "Seven Gates",
    description: "Independent research on companies, markets and power.",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F1",
    theme_color: "#26342B",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
