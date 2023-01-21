import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    light: {
      50: '#FFF',
      100: '#EDEDED',
      200: '#D8D3D3'
    },
    dark: {
      50: '#141414',
      100: '#22252A',
      200: '#535558'
    },
    red: {
      50: '#571A0E',
      100: '#D64122',
      200: '#E05F45'
    }
  },
  fonts: {
    semibold: 'Inter_600SemiBold',
    medium: 'Inter_500Medium',
    regular: 'Inter_400Regular'
  }
})

declare module 'native-base' {
  interface ICustomTheme {
    colors: {
      light: {
        50: string
        100: string
        200: string
      }
      dark: {
        50: string
        100: string
        200: string
      }
      red: {
        50: string
        100: string
        200: string
      }
    }
    fonts: {
      semibold: string
      medium: string
      regular: string
    }
  }
}