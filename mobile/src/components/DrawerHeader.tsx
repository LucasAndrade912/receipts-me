import { HStack, Pressable, Avatar } from 'native-base'
import { List, ArrowLeft } from 'phosphor-react-native'
import { DrawerHeaderProps } from '@react-navigation/drawer'

export function DrawerHeader({ navigation, route }: DrawerHeaderProps) {
  const { name } = route

  const isRecipeRoute = name === 'recipe'

  function handleOpenDrawer() {
    navigation.openDrawer()
  }

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <HStack
      height={16}
      bgColor="red.100"
      justifyContent="space-between"
      alignItems="center"
      px={6}
    >
      <Pressable
        onPress={isRecipeRoute ? handleGoBack : handleOpenDrawer}
        _pressed={{
          opacity: 0.6
        }}
      >
        {
          isRecipeRoute
            ? <ArrowLeft size={32} color="#FFF" />
            : <List size={32} color="#FFF" />
        }
      </Pressable>

      <Avatar
        w={8}
        h={8}
        source={{ uri: 'https://github.com/LucasAndrade912.png' }}
      />
    </HStack>
  )
}