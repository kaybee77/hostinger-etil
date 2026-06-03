import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Excel Trade International Ltd",
    short_name: "ETIL",
    description:
      "UK-based engineering supply specialist serving West Africa's petrochemical, mining, domestic, hospitality, and industrial sectors.",
    start_url: "/",
    display: "standalone",
    background_color: "#07101d",
    theme_color: "#07101d",
    icons: [
      {
        src: "/etillogo.jpeg",
        sizes: "any",
        type: "image/jpeg",
      },
    ],
  };
}
