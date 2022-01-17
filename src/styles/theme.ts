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
      tertiary: '#131931'
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
    input: {
      placeHolder: quaternaryColor,
      text: '#FFFFFF',
      background: '#242D48',
      border: quaternaryColor
    },
    text: {
      light: '#9AA9D5',
      dark: quaternaryColor
    },
    icon: {
      primary: primaryColor,
      dark: quaternaryColor
    }
  },
  sizes: {
    button: {
      height: '2.2rem',
      minWidth: '6.88rem',
      borderRadius: buttonBorderRadius
    },
    input: {
      height: '2.2rem',
      borderRadius: buttonBorderRadius
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