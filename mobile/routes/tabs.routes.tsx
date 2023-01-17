import { Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

function Receipts() {
  return <Text>Receitas</Text>
}

function Search() {
  return <Text>Pesquisa</Text>
}

export function TabsRoutes() {
  return (
    <Navigator initialRouteName="receipts" screenOptions={{ headerShown: false }}>
      <Screen name="receipts" component={Receipts} />
      <Screen name="search" component={Search} />
    </Navigator>
  )
}