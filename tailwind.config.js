module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./js/*.js",
    "./components/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep forest green
        primary: {
          DEFAULT: "#2D5A27", // Deep forest green for trust and growth
          50: "#F0F9F0", // Very light green
          100: "#D4F1D4", // Light green
          200: "#A8E3A8", // Medium light green
          300: "#7DD57D", // Medium green
          400: "#52C752", // Medium dark green
          500: "#2D5A27", // Primary green
          600: "#245020", // Dark green
          700: "#1B3C1B", // Darker green
          800: "#122815", // Very dark green
          900: "#091410", // Darkest green
        },
        // Secondary Colors - Rich earth brown
        secondary: {
          DEFAULT: "#8B4513", // Rich earth brown for stability and authenticity
          50: "#FDF8F3", // Very light brown
          100: "#F9E8D9", // Light brown
          200: "#F3D1B3", // Medium light brown
          300: "#EDBA8D", // Medium brown
          400: "#E7A367", // Medium dark brown
          500: "#8B4513", // Primary brown
          600: "#7A3D11", // Dark brown
          700: "#69350F", // Darker brown
          800: "#582D0D", // Very dark brown
          900: "#47250B", // Darkest brown
        },
        // Accent Colors - Warm gold
        accent: {
          DEFAULT: "#E8B04B", // Warm gold for optimism and achievement highlights
          50: "#FEFBF5", // Very light gold
          100: "#FDF4E1", // Light gold
          200: "#FBE9C3", // Medium light gold
          300: "#F9DEA5", // Medium gold
          400: "#F7D387", // Medium dark gold
          500: "#E8B04B", // Primary gold
          600: "#D19E42", // Dark gold
          700: "#BA8C39", // Darker gold
          800: "#A37A30", // Very dark gold
          900: "#8C6827", // Darkest gold
        },
        // Background Colors
        background: "#FAFAF9", // Warm white for comfortable extended reading
        surface: "#F5F5F4", // Subtle contrast for card elements and sections
        // Text Colors
        text: {
          primary: "#1C1C1C", // Near black for excellent readability
          secondary: "#6B7280", // Medium gray for supporting information
        },
        // Status Colors
        success: {
          DEFAULT: "#059669", // Natural green for positive confirmations
          50: "#ECFDF5", // Very light success green
          100: "#D1FAE5", // Light success green
          200: "#A7F3D0", // Medium light success green
          300: "#6EE7B7", // Medium success green
          400: "#34D399", // Medium dark success green
          500: "#059669", // Primary success green
          600: "#047857", // Dark success green
          700: "#065F46", // Darker success green
          800: "#064E3B", // Very dark success green
          900: "#022C22", // Darkest success green
        },
        warning: {
          DEFAULT: "#D97706", // Amber for important but non-critical alerts
          50: "#FFFBEB", // Very light warning amber
          100: "#FEF3C7", // Light warning amber
          200: "#FDE68A", // Medium light warning amber
          300: "#FCD34D", // Medium warning amber
          400: "#FBBF24", // Medium dark warning amber
          500: "#D97706", // Primary warning amber
          600: "#B45309", // Dark warning amber
          700: "#92400E", // Darker warning amber
          800: "#78350F", // Very dark warning amber
          900: "#451A03", // Darkest warning amber
        },
        error: {
          DEFAULT: "#DC2626", // Clear red for helpful error guidance
          50: "#FEF2F2", // Very light error red
          100: "#FEE2E2", // Light error red
          200: "#FECACA", // Medium light error red
          300: "#FCA5A5", // Medium error red
          400: "#F87171", // Medium dark error red
          500: "#DC2626", // Primary error red
          600: "#B91C1C", // Dark error red
          700: "#991B1B", // Darker error red
          800: "#7F1D1D", // Very dark error red
          900: "#450A0A", // Darkest error red
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        accent: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'DEFAULT': '6px',
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'elevated': '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '600': '600ms',
      },
      transitionTimingFunction: {
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 400ms ease-out forwards',
        'slide-up': 'slideUp 300ms ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}