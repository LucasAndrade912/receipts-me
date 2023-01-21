import { Text, ITextProps } from 'native-base'

interface TitleProps extends ITextProps {
  type: 'title' | 'subtitle'
}

export function Title({ type, children, ...rest }: TitleProps) {
  const isTitle = type === 'title'

  return (
    <Text
      fontSize={isTitle ? '2xl' : 'md'}
      fontFamily={isTitle ? 'semibold' : 'medium'}
      color={isTitle ? 'dark.100' : 'dark.200'}
      { ...rest }
    >
      { children }
    </Text>
  )
}