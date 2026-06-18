/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: { DEFAULT: 'var(--background)' },
        foreground: { DEFAULT: 'var(--foreground)' },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
          light: 'var(--primary-light)',
          dark: 'var(--primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
          light: 'var(--accent-light)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
          elevated: 'var(--card-elevated)',
        },
        border: { DEFAULT: 'var(--border)' },
        input: { DEFAULT: 'var(--input)' },
        ring: { DEFAULT: 'var(--ring)' },
        success: {
          DEFAULT: 'var(--success)',
          bg: 'var(--success-bg)',
        },
        warning: {
          DEFAULT: 'var(--warning)',
          bg: 'var(--warning-bg)',
        },
        error: {
          DEFAULT: 'var(--error)',
          bg: 'var(--error-bg)',
        },
        info: {
          DEFAULT: 'var(--info)',
          bg: 'var(--info-bg)',
        },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'var(--radius-sm)',
        lg: 'var(--radius-lg)',
        xl: '20px',
        '2xl': '24px',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 32px rgba(0, 0, 0, 0.5)',
        'violet': '0 4px 20px rgba(124, 58, 237, 0.3)',
        'amber': '0 4px 20px rgba(245, 158, 11, 0.25)',
        'glow-primary': '0 0 20px rgba(124, 58, 237, 0.4)',
        'glow-accent': '0 0 20px rgba(245, 158, 11, 0.35)',
        'inner-card': 'inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'gradient-violet': 'linear-gradient(135deg, #5B21B6 0%, #7C3AED 50%, #8B5CF6 100%)',
        'gradient-amber': 'linear-gradient(135deg, #D97706 0%, #F59E0B 100%)',
        'gradient-brand': 'linear-gradient(135deg, #0F0F1A 0%, #1A0A2E 50%, #0F0F1A 100%)',
        'gradient-card': 'linear-gradient(145deg, rgba(26,26,46,0.9) 0%, rgba(20,20,38,0.95) 100%)',
        'gradient-ai': 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(139,92,246,0.08) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
        'countdown': 'countdownPulse 3s ease-in-out infinite',
        'streak': 'streakFlicker 2s ease-in-out infinite',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};