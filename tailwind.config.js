/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0b214a',
        'navy-soft': '#14366f',
        orange: '#ff8a1e',
        'orange-deep': '#ff6b00',
        lime: '#9df442',
        sky: '#5db8ff',
        mist: '#eef4ff',
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 24px 80px rgba(7, 27, 64, 0.18)',
        panel: '0 18px 48px rgba(8, 28, 61, 0.12)',
      },
      backgroundImage: {
        hero:
          'radial-gradient(circle at 15% 20%, rgba(93,184,255,0.28), transparent 26%), radial-gradient(circle at 82% 18%, rgba(157,244,66,0.24), transparent 20%), linear-gradient(135deg, #08162f 0%, #0b214a 45%, #14366f 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        rise: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        rise: 'rise 0.8s ease-out both',
      },
    },
  },
  plugins: [],
}
