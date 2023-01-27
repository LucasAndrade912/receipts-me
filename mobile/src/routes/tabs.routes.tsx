import { ForkKnife, MagnifyingGlass } from 'phosphor-react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Receipts } from '../screens/Receipts'
import { Search } from '../screens/Search'

const { Navigator, Screen } = createBottomTabNavigator()

export function TabsRoutes() {
  return (
    <Navigator
      initialRouteName="receipts"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          height: 72,
          backgroundColor: '#D64122'
        },
        tabBarIcon: ({ focused }) => {
          const color = focused ? '#FFF' : '#D8D3D3'

          return route.name === 'receipts'
            ? <ForkKnife size={32} color={color} weight="regular" />
            : <MagnifyingGlass size={32} color={color} weight="bold" />
        }
      })}
    >
      <Screen
        name="receipts"
        component={Receipts}
      />

      <Screen
        name="search"
        component={Search}
      />
    </Navigator>
  )
}