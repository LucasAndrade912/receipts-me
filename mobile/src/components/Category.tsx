import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { View, Text } from 'native-base'

interface CategoryProps extends TouchableOpacityProps {
  title: string
  selected?: boolean
}

export function Category({ title, selected = false, ...rest }: CategoryProps) {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View
        px={6}
        py={2}
        rounded="full"
        bgColor={selected ? 'red.200' : 'light.100'}
        justifyContent="center"
        alignItems="center"
        mr={3}
        shadow={9}
        { ...rest }
      >
        <Text
          fontSize="sm"
          fontFamily="normal"
          color={selected ? 'light.100' : 'dark.50'}
        >
          { title }
        </Text>
      </View>
    </TouchableOpacity>
  )
}