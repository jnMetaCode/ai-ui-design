/** @type {import('tailwindcss').Config} */

// Targets Tailwind CSS v3.x — not yet compatible with v4.
// Production-ready Tailwind design system config
// Copy this into your project's tailwind.config.js and customize brand colors

module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue,svelte}',
    './index.html',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      // --- Brand Colors ---
      colors: {
        brand: {
          50:  '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',  // Primary action color
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
      },

      // --- Typography ---
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          'sans-serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          'Menlo',
          'monospace',
        ],
      },

      fontSize: {
        // Modular scale (1.25 ratio)
        'xs':   ['0.75rem',   { lineHeight: '1rem' }],
        'sm':   ['0.875rem',  { lineHeight: '1.25rem' }],
        'base': ['1rem',      { lineHeight: '1.625rem' }],
        'lg':   ['1.25rem',   { lineHeight: '1.75rem' }],
        'xl':   ['1.563rem',  { lineHeight: '2rem' }],
        '2xl':  ['1.953rem',  { lineHeight: '2.25rem' }],
        '3xl':  ['2.441rem',  { lineHeight: '2.75rem' }],
        '4xl':  ['3.052rem',  { lineHeight: '3.25rem' }],
      },

      // --- Spacing (extends Tailwind's 4px grid) ---
      spacing: {
        '4.5': '1.125rem',  // 18px
        '13':  '3.25rem',   // 52px
        '15':  '3.75rem',   // 60px
        '18':  '4.5rem',    // 72px
        '22':  '5.5rem',    // 88px
      },

      // --- Border Radius ---
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      // --- Shadows ---
      boxShadow: {
        'sm':  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md':  '0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
        'lg':  '0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'xl':  '0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
        'card':     '0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.03)',
        'dropdown': '0 4px 12px 0 rgb(0 0 0 / 0.08)',
        'modal':    '0 25px 50px -12px rgb(0 0 0 / 0.15)',
      },

      // --- Max Widths ---
      maxWidth: {
        '8xl': '88rem',    // 1408px
        'prose': '65ch',   // Optimal reading width
      },

      // --- Transitions ---
      transitionDuration: {
        '0': '0ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
      },

      // --- Animations ---
      keyframes: {
        'fade-in': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%':   { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in':        'fade-in 0.2s ease-out',
        'slide-in-right': 'slide-in-right 0.3s ease-out',
        'scale-in':       'scale-in 0.15s ease-out',
      },

      // --- Z-Index Scale ---
      zIndex: {
        'dropdown': '1000',
        'sticky':   '1020',
        'fixed':    '1030',
        'overlay':  '1040',
        'modal':    '1050',
        'popover':  '1060',
        'tooltip':  '1070',
        'toast':    '1080',
      },
    },
  },

  plugins: [
    // Required: all input/select/checkbox examples in this project depend on
    // @tailwindcss/forms for consistent cross-browser form element styling.
    require('@tailwindcss/forms'),
    // Uncomment as needed:
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/container-queries'),
  ],
};
