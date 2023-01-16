import { CLIENT_ID } from '@env'
import { useEffect } from 'react'
import { View, Text } from 'native-base'
import { GoogleLogo } from 'phosphor-react-native'
import * as WebBrowser from 'expo-web-browser'
import * as AuthSession from 'expo-auth-session'
import * as GoogleProvider from 'expo-auth-session/providers/google'

import { Button } from '../components/Button'
import { Container } from '../components/Container'

WebBrowser.maybeCompleteAuthSession()

export function Login() {
  const [request, response, promptAsync] = GoogleProvider.useAuthRequest({
    clientId: CLIENT_ID,
    scopes: ['profile', 'email'],
    redirectUri: AuthSession.makeRedirectUri(({ useProxy: true })),
    responseType: 'token'
  })

  async function signIn() {
    await promptAsync()
  }

  useEffect(() => {
    if (response?.type === 'success' && response.authentication?.accessToken) {
      console.log(response.authentication.accessToken)
    }
  }, [response])

  return (
    <Container>
      <View flex={1} justifyContent="center" alignItems="center">
        <Text color="dark.50" fontSize="3xl" fontFamily="heading" textAlign="center" marginBottom={32}>
          Seja bem-vindo ao {' '} ReceipetsMe 🍜
        </Text>

        <Button
          w="4/5"
          disabled={!request}
          leftIcon={<GoogleLogo color="#FFF" size={32} weight="bold" />}
          onPress={signIn}
        >
          <Text
            color="light.50"
            fontFamily="medium"
            fontSize="md"
            textTransform="uppercase"
            ml={1}
          >
            Entrar com o Google
          </Text>
        </Button>
      </View>
    </Container>
  )
}