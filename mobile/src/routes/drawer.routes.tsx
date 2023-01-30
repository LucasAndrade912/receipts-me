import { ForkKnife, Star } from 'phosphor-react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { TabsRoutes } from './tabs.routes'

import { DrawerHeader } from '../components/DrawerHeader'

import { Recipe } from '../screens/Recipe'
import { FavoriteRecipes } from '../screens/FavoriteRecipes'


const { Navigator, Screen } = createDrawerNavigator()

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
        name="favoriteRecipes"
        component={FavoriteRecipes}
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

      <Screen
        name="recipe"
        component={Recipe}
        options={{ drawerItemStyle: { display: 'none' } }}
      />
    </Navigator>
  )
}