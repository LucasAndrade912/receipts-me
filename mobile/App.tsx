import 'react-native-gesture-handler'
import { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { NativeBaseProvider } from 'native-base'
import { SafeAreaView } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import {
  useFonts,
  Inter_600SemiBold,
  Inter_500Medium,
  Inter_400Regular
} from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen'

import { theme } from './utils/theme'
import { AppRoutes } from './routes/app.routes'

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
      <NavigationContainer>
        <SafeAreaView onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <AppRoutes />
          <StatusBar style="auto" translucent />
        </SafeAreaView>
      </NavigationContainer>
    </NativeBaseProvider>
  )
}