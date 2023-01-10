import { Button as ButtonNative, IButtonProps } from 'native-base'

export function Button({ w, children }: IButtonProps) {
  return (
    <ButtonNative
      w={w}
      height="16"
      bgColor="red.100"
      paddingY="3"
      rounded="8"
      shadow="7"
      _loading={{
        _spinner: { color: 'light.50' },
      }}
      _pressed={{
        bgColor: 'red.200'
      }}
    >
      { children }
    </ButtonNative>
  )
}