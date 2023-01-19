import { ReactNode } from 'react'
import { View } from 'native-base'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps) {
  return (
    <View bgColor="light.50" flex={1}>
      { children }
    </View>
  )
}