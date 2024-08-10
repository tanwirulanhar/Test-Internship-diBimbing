/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-berita": "url('/assets/bgBerita.jpeg')",
      },
      colors: {
        "blue-navbar": "#094C5D",
        "background-event": "#212934",
        footer: "#F8F9FA",
        blueicon: "#0BB1CB",
      },
      height: {
        304: "304px",
        399: "399px",
        140: "140px",
        399: "399px",
        219: "219px",
        413: "413px",
        
      },
      width: {
        250: "250px",
        540: "540px",
        736: "736px",
        579: "579px",
        736: "736px",
        1000: "1000px",
      },
    },
  },
  plugins: [],
};
