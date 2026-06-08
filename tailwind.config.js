/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Neutral grayscale ramp — black-and-white personal palette.
        // (Traciora's violet is the startup's color, intentionally not used here.)
        night: '#09090B',
        graphite: '#18181B',
        slate: '#27272A',
        zinc: '#3F3F46',
        steel: '#52525B',
        silver: '#A1A1AA',
        ash: '#D4D4D8',
        mist: '#F4F4F5',
        cloud: '#FAFAFA',
      },
      fontFamily: {
        // Display = PhotoWeb editorial serif; body = shared Inter; mono = Traciora
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '12px',
      },
      maxWidth: {
        content: '1100px',
      },
      transitionTimingFunction: {
        // PhotoWeb's signature slow ease
        editorial: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
    },
  },
  plugins: [],
}
