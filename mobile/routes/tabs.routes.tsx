import { Text } from 'react-native'
import { ForkKnife, MagnifyingGlass } from 'phosphor-react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

type BottomTabNavigatorParamList = {
  receipts: undefined
  receipt: undefined
  search: undefined
}

const { Navigator, Screen } = createBottomTabNavigator<BottomTabNavigatorParamList>()

function Receipts() {
  return <Text>Receitas</Text>
}

function Receipt() {
  return <Text>Receita linda</Text>
}

function Search() {
  return <Text>Pesquisa</Text>
}

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
      <Screen name="receipts" component={Receipts} />
      <Screen name="receipt" component={Receipt} options={{ tabBarButton: () => null }} />
      <Screen name="search" component={Search} />
    </Navigator>
  )
}