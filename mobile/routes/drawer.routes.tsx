import { Text } from 'react-native'
import { ForkKnife, Star } from 'phosphor-react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { TabsRoutes } from './tabs.routes'

import { DrawerHeader } from '../components/DrawerHeader'

const { Navigator, Screen } = createDrawerNavigator()

function ReceiptsFavorites() {
  return <Text>Receitas Favoritas</Text>
}

export function DrawerRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        header: DrawerHeader,
        drawerActiveTintColor: '#FFF',
        drawerActiveBackgroundColor: '#E05F45'
      }}
    >
      <Screen
        name="home"
        component={TabsRoutes}
        options={{
          drawerLabel: 'Home',
          drawerIcon: ({ focused }) => (
            <ForkKnife
              size={14}
              color={focused ? '#FFF' : '#000'}
            />
          )
        }}
      />

      <Screen
        name="receiptsFavorites"
        component={ReceiptsFavorites}
        options={{
          drawerLabel: 'Receitas Favoritas',
          drawerIcon: ({ focused }) => (
            <Star
              weight="fill"
              size={14}
              color={focused ? '#FFF' : '#000'}
            />
          )
        }}
      />
    </Navigator>
  )
}