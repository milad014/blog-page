import { defineConfig } from "windicss/helpers";

export default defineConfig({
  attributify: true,
  shortcuts: {
    headline1: "text-32px",
    headline2: "text-28px",
    headline3: "text-24px",
    title1: "text-21px",
    title2: "text-19px",
    title3: "text-17px",
    body1: "text-16px",
    body2: "text-14px",
    body3: "text-13px",
    caption1: "text-12px",
    caption2: "text-10px",
    // custom
    fcenter: "flex items-center justify-center",
    hstack: "flex items-center",
    vstack: "flex flex-col",
    icon: "w-6 h-6 fill-current",
    "app-border": "border-secondary-300-200 dark:border-dark-300",
  },
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.5rem",
      },
      screens: {
        sm: "600px",
        md: "960px",
        lg: "1264px",
        xl: "1904px",
        // add media print screen
        print: { raw: "print" },
      },
      borderRadius: {
        0: "0px",
        1: "2px",
        2: "4px",
        3: "8px",
        4: "16px",
        5: "32px",
      },
      colors: {
        primary: "#14142B",
        disable: "#BFBFBF",

        secondary: {
          100: "#F7F7FC",
          200: "#EFF0F6",
          300: "#EFF0F7",
          400: "#A0A3BD",
          500: "#4E4B66",
          600: "#6E7191",
        },

        violet: {
          50: "#BFBEFC",
          100: "#610BEF",
          200: "#4700AB",
          300: "#14142B",
        },
      },
    },
  },
});
