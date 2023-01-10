import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

import { theme } from './utils/theme'
import { Login } from './screens/Login'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_600SemiBold,
    Inter_500Medium,
    Inter_400Regular
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <Login />
      </SafeAreaView>
      <StatusBar style="auto" translucent />
    </NativeBaseProvider>
  )
}