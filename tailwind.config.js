/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      GunterzRegular: ["Gunterz-Regular", ...fontFamily.sans],
      NordBold: ["Nord-Bold", ...fontFamily.sans],
      NordRegular: ["Nord-Regular", ...fontFamily.sans],
      NordMedium: ["Nord-Medium", ...fontFamily.sans],
      Outfit: ["Outfit", ...fontFamily.sans],
    },
    extend: {
      colors: {
        // Background Colors
        "midnight-navy": "#0B1220",
        "deep-indigo": "#0F1A2E",
        "dark-slate-blue": "#101B30",
        "steel-blue-tint": "#1A2C46",
        // Brand & Accent Colors
        "primary-cyan": "#4CC3E6",
        "soft-aqua": "#6FD7F2",
        "sky-blue": "#55BFD9",
        // Icon & Decorative Colors
        "icon-cyan": "#58C8E8",
        "light-icon-blue": "#7FD9F2",
        "decorative-blue": "#4FAFD1",
        // Text Colors
        "text-light-blue-gray": "#C7D2E0",
        "text-muted-blue-gray": "#9FB1C8",
        "text-soft-slate-blue": "#7A8CA6",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        card: "oklch(var(--card))",
        "card-foreground": "oklch(var(--card-foreground))",
        popover: "oklch(var(--popover))",
        "popover-foreground": "oklch(var(--popover-foreground))",
        primary: "oklch(var(--primary))",
        "primary-foreground": "oklch(var(--primary-foreground))",
        secondary: "oklch(var(--secondary))",
        "secondary-foreground": "oklch(var(--secondary-foreground))",
        muted: "oklch(var(--muted))",
        "muted-foreground": "oklch(var(--muted-foreground))",
        accent: "oklch(var(--accent))",
        "accent-foreground": "oklch(var(--accent-foreground))",
        destructive: "oklch(var(--destructive))",
        "destructive-foreground": "oklch(var(--destructive-foreground))", // Not present in provided CSS but good practice? User didn't provide it. I'll omit or check if destructive uses it. User provided --destructive but not --destructive-foreground. Wait, looking at file... --destructive is there. --destructive-foreground is NOT.
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring))",
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        bgGradient: "linear-gradient(135deg, #0B1220 0%, #0F1A2E 50%, #101B30 100%)",
        buttonGradient:
          "linear-gradient(180deg, #4CC3E6 0%, #55BFD9 50%, #4FAFD1 100%)",
      },
    },
    animation: {
      "star-movement-bottom": "star-movement-bottom linear infinite alternate",
      "star-movement-top": "star-movement-top linear infinite alternate",
      float: "float 6s ease-in-out infinite",
    },
    keyframes: {
      "star-movement-bottom": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(-100%, 0%)", opacity: "0" },
      },
      "star-movement-top": {
        "0%": { transform: "translate(0%, 0%)", opacity: "1" },
        "100%": { transform: "translate(100%, 0%)", opacity: "0" },
      },
      float: {
  "0%, 100%": { transform: "translateY(0px)" },
  "50%": { transform: "translateY(-8px)" },
},
    },
  },

  // plugins: [require("@tailwindcss/line-clamp")],
};
