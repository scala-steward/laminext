const colors = require('tailwindcss/colors')
const scalaVersion = require('./scala-version')

module.exports = (api) => {
  const scalajsMode = api.mode === 'production' ? 'opt' : 'fastopt'
  return {
    mode: 'jit',
    purge: [
      `./target/scala-${scalaVersion}/website-${scalajsMode}/*.js`,
      './src/main/static/html/*',
    ],
    theme: {
      extend: {
        colors: {
          gray: colors.coolGray,
        },
        fontFamily: {
          display: ['Oxanium', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
          serif: ['Inter', 'ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
          mono: [
            'JetBrains Mono',
            'ui-monospace',
            'SFMono-Regular',
            'Menlo',
            'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace',
          ],
        },
        spacing: {
          '96': '24rem',
          '112': '28rem',
          '128': '32rem',
          '144': '36rem',
          '1000': '250rem',
          '4000': '1000rem'
        },
        minHeight: {
          '96': '24rem',
          '112': '28rem',
          '128': '32rem',
          '144': '36rem',
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'wiggle': 'wiggle .5s ease-in-out infinite'
        },
        keyframes: {
          'wiggle': {
            '0%, 100%': {
              transform: 'translateX(0px)',
              'timing-function': 'ease-in',
            },
            '37%': {
              transform: 'translateX(5px)',
              'timing-function': 'ease-out',
            },
            '55%': {
              transform: 'translateX(-5px)',
              'timing-function': 'ease-in',
            },
            '73%': {
              transform: 'translateX(4px)',
              'timing-function': 'ease-out',
            },
            '82%': {
              transform: 'translateX(-4px)',
              'timing-function': 'ease-in',
            },
            '91%': {
              transform: 'translateX(2px)',
              'timing-function': 'ease-out',
            },
            '96%': {
              transform: 'translateX(-2px)',
              'timing-function': 'ease-in',
            },
          },
        },
      },
    },
    variants: {
      textColor: ['responsive', 'hover', 'focus', 'group-hover'],
      opacity: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
      textOpacity: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
      cursor: ['responsive', 'hover', 'focus', 'group-hover', 'disabled'],
      animations: ['responsive'],
      animationDuration: ['responsive'],
      animationTimingFunction: ['responsive'],
      animationDelay: ['responsive'],
      animationIterationCount: ['responsive'],
      animationDirection: ['responsive'],
      animationFillMode: ['responsive'],
      animationPlayState: ['responsive'],
    },
    corePlugins: {},
    plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio')
    ],
  }
}
