import { MagnifyingGlass } from 'phosphor-react-native'
import { VStack, HStack, Text, Input } from 'native-base'

import { Button } from '../components/Button'
import { Container } from '../components/Container'

export function Search() {
  return (
    <Container>
      <VStack pt={8} px={6} w="full">
        <HStack w="full" justifyContent="space-between">
          <Input
            flex={1}
            borderWidth={1}
            borderColor="light.100"
            rounded="lg"
            mr={2}
            px={3}
            bgColor="light.100"
            placeholder="Pesquise o nome da sua receita"
            fontSize="xs"
            fontFamily="regular"
            color="dark.50"
            _focus={{
              borderWidth: '1',
              borderColor: 'light.200'
            }}
          />

          <Button py={3}>
            <MagnifyingGlass color="#FFF" size={24} />
          </Button>
        </HStack>

        <Text
          mt={20}
          fontSize="lg"
          fontFamily="medium"
          textAlign="center"
          color="red.50"
          underline
        >
          Nenhuma receita  foi encontrada :(
        </Text>
      </VStack>
    </Container>
  )
}