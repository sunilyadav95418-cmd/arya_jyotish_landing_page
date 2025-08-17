module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Royal Blue for spiritual authority
        primary: {
          DEFAULT: "#1e3a8a", // blue-800
          50: "#eff6ff", // blue-50
          100: "#dbeafe", // blue-100
          500: "#3b82f6", // blue-500
          600: "#2563eb", // blue-600
          700: "#1d4ed8", // blue-700
          800: "#1e40af", // blue-800
          900: "#1e3a8a", // blue-900
        },
        // Secondary Colors - Cosmic Purple for mystical elements
        secondary: {
          DEFAULT: "#7c3aed", // violet-600
          50: "#f5f3ff", // violet-50
          100: "#ede9fe", // violet-100
          500: "#8b5cf6", // violet-500
          600: "#7c3aed", // violet-600
          700: "#6d28d9", // violet-700
        },
        // Accent Colors - Gold for premium positioning
        accent: {
          DEFAULT: "#fbbf24", // amber-400
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
          400: "#fbbf24", // amber-400
          500: "#f59e0b", // amber-500
          600: "#d97706", // amber-600
        },
        // Background Colors
        background: "#ffffff", // white
        surface: {
          DEFAULT: "#f8fafc", // slate-50
          100: "#f1f5f9", // slate-100
        },
        // Text Colors
        text: {
          primary: "#1f2937", // gray-800
          secondary: "#6b7280", // gray-500
          muted: "#9ca3af", // gray-400
        },
        // Status Colors
        success: {
          DEFAULT: "#10b981", // emerald-500
          50: "#ecfdf5", // emerald-50
          100: "#d1fae5", // emerald-100
        },
        warning: {
          DEFAULT: "#f59e0b", // amber-500
          50: "#fffbeb", // amber-50
          100: "#fef3c7", // amber-100
        },
        error: {
          DEFAULT: "#ef4444", // red-500
          50: "#fef2f2", // red-50
          100: "#fee2e2", // red-100
        },
        // Border Colors
        border: {
          DEFAULT: "#e5e7eb", // gray-200
          light: "#f3f4f6", // gray-100
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section-title': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'card-title': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
      },
      boxShadow: {
        'cosmic': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        'cosmic-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        'cosmic-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'cosmic-float': 'cosmic-float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        'cosmic-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderWidth: {
        '3': '3px',
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'cosmic': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}