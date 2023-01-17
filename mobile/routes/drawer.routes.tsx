import { Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { TabsRoutes } from './tabs.routes'

const { Navigator, Screen } = createDrawerNavigator()

function ReceiptsFavorites() {
  return <Text>Receitas Favoritas</Text>
}

export function DrawerRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={TabsRoutes} options={{ drawerLabel: 'Home' }} />
      <Screen name="receiptsFavorites" component={ReceiptsFavorites} options={{ drawerLabel: 'Receitas Favoritas' }} />
    </Navigator>
  )
}