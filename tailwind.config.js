module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wwwutilitaccomalto: "var(--wwwutilitaccomalto)",
        wwwutilitaccomblack: "var(--wwwutilitaccomblack)",
        wwwutilitaccomwhite: "var(--wwwutilitaccomwhite)",
        "wwwutilitaccomwhite-70": "var(--wwwutilitaccomwhite-70)",
        wwwutilitaccomwoodsmoke: "var(--wwwutilitaccomwoodsmoke)",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        "www-utilitac-com-barlow-bold-upper":
          "var(--www-utilitac-com-barlow-bold-upper-font-family)",
        "www-utilitac-com-barlow-medium":
          "var(--www-utilitac-com-barlow-medium-font-family)",
        "www-utilitac-com-barlow-regular":
          "var(--www-utilitac-com-barlow-regular-font-family)",
        "www-utilitac-com-barlow-semibold":
          "var(--www-utilitac-com-barlow-semibold-font-family)",
        "www-utilitac-com-bebas-neue-regular":
          "var(--www-utilitac-com-bebas-neue-regular-font-family)",
        "www-utilitac-com-font-awesome-5-brands-regular":
          "var(--www-utilitac-com-font-awesome-5-brands-regular-font-family)",
        "www-utilitac-com-font-awesome-5-free-solid":
          "var(--www-utilitac-com-font-awesome-5-free-solid-font-family)",
        "www-utilitac-com-font-awesome-5-free-solid-title":
          "var(--www-utilitac-com-font-awesome-5-free-solid-title-font-family)",
        "www-utilitac-com-inter-light":
          "var(--www-utilitac-com-inter-light-font-family)",
        "www-utilitac-com-montserrat-extralight":
          "var(--www-utilitac-com-montserrat-extralight-font-family)",
        "www-utilitac-com-montserrat-light":
          "var(--www-utilitac-com-montserrat-light-font-family)",
        "www-utilitac-com-montserrat-medium":
          "var(--www-utilitac-com-montserrat-medium-font-family)",
        "www-utilitac-com-montserrat-medium-title":
          "var(--www-utilitac-com-montserrat-medium-title-font-family)",
        "www-utilitac-com-nunito-sans-regular":
          "var(--www-utilitac-com-nunito-sans-regular-font-family)",
        "www-utilitac-com-nunito-sans-semibold-upper":
          "var(--www-utilitac-com-nunito-sans-semibold-upper-font-family)",
        "www-utilitac-com-roboto-medium":
          "var(--www-utilitac-com-roboto-medium-font-family)",
        "www-utilitac-com-roboto-regular":
          "var(--www-utilitac-com-roboto-regular-font-family)",
        "www-utilitac-com-semantic-heading-1":
          "var(--www-utilitac-com-semantic-heading-1-font-family)",
        "www-utilitac-com-semantic-heading-2":
          "var(--www-utilitac-com-semantic-heading-2-font-family)",
        "www-utilitac-com-semantic-heading-2-title":
          "var(--www-utilitac-com-semantic-heading-2-title-font-family)",
        "www-utilitac-com-semantic-heading-3":
          "var(--www-utilitac-com-semantic-heading-3-font-family)",
        "www-utilitac-com-semantic-heading-3-title":
          "var(--www-utilitac-com-semantic-heading-3-title-font-family)",
        "www-utilitac-com-semantic-heading-4":
          "var(--www-utilitac-com-semantic-heading-4-font-family)",
        "www-utilitac-com-semantic-heading-4-title":
          "var(--www-utilitac-com-semantic-heading-4-title-font-family)",
        "www-utilitac-com-semantic-item":
          "var(--www-utilitac-com-semantic-item-font-family)",
        "www-utilitac-com-semantic-link":
          "var(--www-utilitac-com-semantic-link-font-family)",
        "www-utilitac-com-semantic-link-title":
          "var(--www-utilitac-com-semantic-link-title-font-family)",
        "www-utilitac-com-semantic-link-underline":
          "var(--www-utilitac-com-semantic-link-underline-font-family)",
        "www-utilitac-com-sora-semibold-title":
          "var(--www-utilitac-com-sora-semibold-title-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
