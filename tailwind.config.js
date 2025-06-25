/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './index.html',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        text: theme.colors.default.text_color.default,
        light: theme.colors.default.text_color.light,
        dark: theme.colors.default.text_color.dark,
        primary: theme.colors.default.theme_color.primary,
      },
      fontFamily: {
        primary: ["var(--font-primary)", fontPrimaryType],
        secondary: ["var(--font-secondary)", fontSecondaryType],
      },
    },
  },
}
