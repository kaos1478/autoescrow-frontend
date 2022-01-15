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
        text: '#FFFFFF'
      },
      danger: {
        darkRed: '#E21B25',
        lightRed: '#E55C5C',
        text: '#FFFFFF'
      },
      warning: {
        darkOrange: '#ED8424',
        lightOrange: '#FF9473',
        text: '#FFFFFF'
      },
      default: {
        primary: primaryColor,
        secondary: secondaryColor,
        text: '#FFFFFF'
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
  fontSizes: {
    small: '1.125rem',
    medium: '1.5rem',
    large: '2.25rem'
  },
  breakpoints
}

export default theme
