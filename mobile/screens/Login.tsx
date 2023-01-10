import { View, Text } from 'native-base'

import { Button } from '../components/Button'
import { Container } from '../components/Container'

export function Login() {
  return (
    <Container>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text color="dark.50" fontSize="3xl" fontFamily="heading" textAlign="center" marginBottom={32}>
          Seja bem-vindo ao {' '} ReceipetsMe 🍜
        </Text>

        <Button w="4/5">
          <Text color="light.50" fontFamily="medium" fontSize="md" textTransform="uppercase">
            Entrar com o Google
          </Text>
        </Button>
      </View>
    </Container>
  )
}