/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          50: '#f8fafc',
          100: '#0f172a',
          200: '#111827',
        },
        brand: {
          DEFAULT: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF'
        },
        accent: {
          DEFAULT: '#22C55E',
          700: '#16A34A'
        }
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(2, 6, 23, 0.08)'
      },
      borderRadius: {
        'xl2': '1.25rem'
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { transform: 'translateY(16px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-6px)' } },
        shimmer: { '0%': { backgroundPosition: '-200% 0' }, '100%': { backgroundPosition: '200% 0' } }
      },
      animation: {
        'fade-in': 'fadeIn 800ms ease-out both',
        'slide-up': 'slideUp 700ms ease-out both',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite'
      },
      backgroundImage: {
        'mesh': 'radial-gradient(20% 30% at 20% 20%, rgba(37,99,235,.15) 0, transparent 60%), radial-gradient(25% 25% at 80% 10%, rgba(34,197,94,.18) 0, transparent 60%), radial-gradient(25% 25% at 50% 80%, rgba(2,6,23,.12) 0, transparent 60%)'
      }
    }
  },
  plugins: [],
}
