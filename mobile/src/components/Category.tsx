import { View, Text, Pressable, IPressableProps } from 'native-base'

interface CategoryProps extends IPressableProps {
  title: string
  selected?: boolean
}

export function Category({ title, selected = false, ...rest }: CategoryProps) {
  return (
    <Pressable
      _pressed={{
        opacity: 0.7
      }}
      px={6}
      py={2}
      rounded="full"
      bgColor={selected ? 'red.200' : 'light.100'}
      justifyContent="center"
      alignItems="center"
      mr={3}
      shadow={4}
      { ...rest }
    >
      <Text
        fontSize="sm"
        fontFamily="regular"
        color={selected ? 'light.100' : 'dark.50'}
      >
        { title }
      </Text>
    </Pressable>
  )
}