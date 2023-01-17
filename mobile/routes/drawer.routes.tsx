import { createDrawerNavigator } from '@react-navigation/drawer'

import { TabsRoutes } from './tabs.routes'

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={TabsRoutes} />
    </Navigator>
  )
}