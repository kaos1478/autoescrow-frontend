const breakpoints = [
  '@media(min-width: 600px)',
  '@media(min-width: 1340px)',
  '@media(min-width: 1400px)'
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
      background: '#242D48',
      border: quaternaryColor,
      placeHolder: quaternaryColor,
      text: '#FFFFFF'
    },
    text: {
      dark: quaternaryColor,
      light: '#9AA9D5'
    },
    icon: {
      dark: quaternaryColor,
      primary: primaryColor
    }
  },
  sizes: {
    button: {
      borderRadius: buttonBorderRadius,
      height: '2.2rem',
      minWidth: '6.88rem'
    },
    input: {
      borderRadius: buttonBorderRadius,
      height: '2.2rem'
    },
    font: {
      large: '1.5rem',
      medium: '1.125rem',
      small: '0.88rem',
      ultraLarge: '2.25rem',
      ultraSmall: '0.75rem'
    },
    card: {
      borderRadius: '0.3125rem'
    }
  },
  breakpoints
}

export default theme
