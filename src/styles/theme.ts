const breakpoints = [
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]

export type ThemeType = typeof theme

const primaryColor = '#2484EA'
const secondaryColor = '#2367AE'
const tertiaryColor = '#ABCDEF'
const quaternaryColor = '#3E4A72'
const buttonBorderRadius = '0.31rem'

const theme = {
  colors: {
    primary: primaryColor,
    secundary: secondaryColor,
    tertiary: tertiaryColor,
    quaternary: quaternaryColor,
    background: {
      primary: '#0E1122',
      secondary: '#182037',
      tertiary: '#131931',
      quaternary: '#242D48'
    },
    button: {
      success: {
        darkGreen: '#1DAB91',
        lightGreen: '#49CD57',
        text: '#FFFFFF',
        borderRadius: buttonBorderRadius
      },
      danger: {
        darkRed: '#E21B25',
        lightRed: '#E55C5C',
        text: '#FFFFFF',
        borderRadius: buttonBorderRadius
      },
      warning: {
        darkOrange: '#ED8424',
        lightOrange: '#FF9473',
        text: '#FFFFFF',
        borderRadius: buttonBorderRadius
      },
      default: {
        primary: primaryColor,
        secondary: secondaryColor,
        text: '#FFFFFF',
        borderRadius: buttonBorderRadius
      }
    },
    text: {
      light: '#9AA9D5',
      dark: quaternaryColor
    },
    border: quaternaryColor,
    icon: {
      primary: primaryColor,
      dark: quaternaryColor
    }
  },
  sizes: {
    button: {
      height: '2.2rem',
      minWidth: '6.88rem'
    },
    font: {
      ultraSmall: '0.75rem',
      small: '0.88rem',
      medium: '1.125rem',
      large: '1.5rem',
      ultraLarge: '2.25rem'
    }
  },
  breakpoints
}

export default theme
