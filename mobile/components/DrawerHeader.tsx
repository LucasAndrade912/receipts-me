import { View } from 'native-base'
import { List } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import { DrawerHeaderProps } from '@react-navigation/drawer'

export function DrawerHeader({ navigation }: DrawerHeaderProps) {
  function handleOpenDrawer() {
    navigation.openDrawer()
  }

  return (
    <View
      height={16}
      bgColor="red.100"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={6}
    >
      <TouchableOpacity onPress={handleOpenDrawer} activeOpacity={0.6}>
        <List size={32} color="#FFF" />
      </TouchableOpacity>

      <View w={8} h={8} rounded="full" bgColor="light.50" />
    </View>
  )
}