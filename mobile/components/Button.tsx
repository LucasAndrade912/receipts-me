import { Button as ButtonNative, IButtonProps } from 'native-base'

export function Button({ children, ...props }: IButtonProps) {
  return (
    <ButtonNative
      bgColor="red.100"
      py={5}
      rounded={8}
      shadow={7}
      _loading={{
        _spinner: { color: 'light.50' },
      }}
      _pressed={{
        bgColor: 'red.200'
      }}
      { ...props }
    >
      { children }
    </ButtonNative>
  )
}