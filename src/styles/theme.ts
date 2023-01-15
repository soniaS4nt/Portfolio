import { extendTheme, type ThemeConfig } from '@chakra-ui/react'


const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const theme = extendTheme({ 
  config,  
  fonts: {
    heading: 'inter',
    body: 'inter',
  },  
  fontWeights: {
    normal: 400,
    medium: 500,
    bold: 700,
  },
  lineHeights: {
    normal: 'normal',
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
    heading: 1.25,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    heading: '-0.025em',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
    heading: '3rem',
  },
  sizes: {
    container: '100%',
    
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    outline: '0 0 0 3px rgba(66, 153, 225, 0.6)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
    none: 'none',
  },
  colors: {
  brand: {
    100: "#f7fafc",
    200: "#edf2f7",
    300: "#e2e8f0",
    400: "#cbd5e0",
    500: "#a0aec0",
    600: "#718096",
    700: "#4a5568",
    800: "#2d3748",
    900: "#1a202c",
  },
  },
  zIndices: {
    docked: 999,
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', 
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
      },
      defaultProps: {
        size: 'lg',
        variant: 'solid',
      },
    },
  },
)

export default theme


