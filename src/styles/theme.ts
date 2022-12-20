import { extendTheme, type ThemeConfig } from '@chakra-ui/react'


// 1. Add your color mode config

// 2. extend the theme

// 3. Call `extendTheme` and pass your custom values

// 4. export the extended theme
// 5. Add a custom `fonts` object
// 6. Let's say you want to add `Montserrat` as the default `body` font
// 7. Add a `fonts` object to your custom theme
// 8. Then, pass the `fonts` object to `extendTheme`
// 9. Now, you can use the `fontFamily` prop
// 10. Add a custom `fontWeights` object
// 11. Let's say you want to add a `thin` font weight
// 12. Add a `fontWeights` object to your custom theme
// 13. Then, pass the `fontWeights` object to `extendTheme`
// 14. Now, you can use the `fontWeight` prop
// 15. Add a custom `lineHeights` object
// 16. Let's say you want to add a `heading` line height
// 17. Add a `lineHeights` object to your custom theme
// 18. Then, pass the `lineHeights` object to `extendTheme`
// 19. Now, you can use the `lineHeight` prop
// 20. Add a custom `letterSpacings` object
// 21. Let's say you want to add a `heading` letter spacing
// 22. Add a `letterSpacings` object to your custom theme
// 23. Then, pass the `letterSpacings` object to `extendTheme`
// 24. Now, you can use the `letterSpacing` prop
// 25. Add a custom `fontSizes` object
// 26. Let's say you want to add a `heading` font size
// 27. Add a `fontSizes` object to your custom theme
// 28. Then, pass the `fontSizes` object to `extendTheme`
// 29. Now, you can use the `fontSize` prop
// 30. Add a custom `sizes` object
// 31. Let's say you want to add a `container` size
// 32. Add a `sizes` object to your custom theme
// 33. Then, pass the `sizes` object to `extendTheme`
// 34. Now, you can use the `size` prop
// 35. Add a custom `radii` object
// 36. Let's say you want to add a `lg` border radius
// 37. Add a `radii` object to your custom theme
// 38. Then, pass the `radii` object to `extendTheme`
// 39. Now, you can use the `borderRadius` prop
// 40. Add a custom `shadows` object
// 41. Let's say you want to add a `lg` shadow
// 42. Add a `shadows` object to your custom theme
// 43. Then, pass the `shadows` object to `extendTheme`
// 44. Now, you can use the `shadow` prop
// 45. Add a custom `colors` object
// 46. Let's say you want to add a `brand` color
// 47. Add a `colors` object to your custom theme
// 48. Then, pass the `colors` object to `extendTheme`
// 49. Now, you can use the `color` prop
// 50. Add a custom `zIndices` object
// 51. Let's say you want to add a `docked` z-index
// 52. Add a `zIndices` object to your custom theme
// 53. Then, pass the `zIndices` object to `extendTheme`
// 54. Now, you can use the `zIndex` prop
// 55. Add a custom `styles` object
// 56. Let's say you want to add a global `body` style
// 57. Add a `styles` object to your custom theme
// 58. Then, pass the `styles` object to `extendTheme`
// 59. Now, you can use the `style` prop
// 60. Add a custom `components` object
// 61. Let's say you want to add a custom `Button` style
// 62. Add a `components` object to your custom theme
// 63. Then, pass the `components` object to `extendTheme`
// 64. Now, you can use the `component` prop



const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
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
    taller: '2',
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
  styles: {
    global: {
      body: {
        /* bg: 'brand.100',
        color: 'brand.800', */
      },/*
      h1: {
        fontSize: 'heading',
        fontWeight: 'bold',
        lineHeight: 'heading',
        letterSpacing: 'heading',
      },

         bg: 'linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)',
        -webkit-background-clip: 'text',
        -webkit-text-fill-color: 'transparent',
        font-size: '3rem',
        font-weight: 700,
        line-height: 1.2,
        margin-bottom: '1rem',
        text-align: 'center',
        text-transform: 'uppercase', */
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold', // Normally, it is "semibold"
      },
      sizes: {
        lg: {
          h: '56px',
          fontSize: 'lg',
          px: '32px',
        },
      },
     /*  variants: {
        solid: (props: any) => ({
          bg: mode('brand.500', 'brand.200')(props),
          color: mode('white', 'gray.800')(props),
        }), */
      },
      defaultProps: {
        size: 'lg',
        variant: 'solid',
      },
    },
  },
)

export default theme


