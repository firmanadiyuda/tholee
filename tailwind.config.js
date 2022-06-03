module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        tholee: {
          "primary": "#1a1a1a",
          "secondary": "#0f0f0f",
          "accent": "#e5e7eb",
          "neutral": "#3D4451",
          "base-100": "#FFFFFF",
          "info": "#3ABFF8",
          "success": "#84cc16",
          "warning": "#FBBD23",
          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
