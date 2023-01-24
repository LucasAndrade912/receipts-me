import { Timer, ForkKnife } from 'phosphor-react-native'
import { ScrollView, Image, HStack, Text } from 'native-base'

import { Title } from '../components/Title'
import { Container } from '../components/Container'

import { receiptMock } from '../utils/mocks'

export function Receipt() {
  const { title, imageOne, imageTwo, imageThree, preparationTime, owner } = receiptMock

  return (
    <Container>
      <ScrollView
        py={8}
        px={6}
        contentContainerStyle={{ alignItems: 'center' }}
      >
        <Image
          w={48}
          h={48}
          mb={8}
          rounded="full"
          source={{ uri: imageOne }}
          alt={title}
        />

        <Title type="title">
          { title }
        </Title>

        <HStack
          my={8}
          w="full"
          justifyContent="space-between"
        >
          <Image
            h={24}
            rounded="lg"
            source={{ uri: imageTwo }}
            alt={title}
            style={{ width: '55%' }}
          />

          <Image
            h={24}
            rounded="lg"
            source={{ uri: imageThree }}
            alt={title}
            style={{ width: '40%' }}
          />
        </HStack>

        <HStack>
          <HStack mr={12} alignItems="center">
            <Timer
              size={14}
              color="#571A0E"
              weight="bold"
            />

            <Text
              ml={1}
              fontSize="xs"
              fontFamily="medium"
            >
              { preparationTime } minutos
            </Text>
          </HStack>

          <HStack alignItems="center">
            <ForkKnife
              size={14}
              color="#571A0E"
              weight="bold"
            />

            <Text
              ml={1}
              fontSize="xs"
              fontFamily="medium"
            >
              { owner }
            </Text>
          </HStack>
        </HStack>
      </ScrollView>
    </Container>
  )
}