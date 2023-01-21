import { Box, IBoxProps } from 'native-base'

export function Container({ children }: IBoxProps) {
  return (
    <Box bgColor="light.50" flex={1} >
      { children }
    </Box>
  )
}