import { HStack, Image, Text } from 'native-base'
import { ForkKnife, Timer } from 'phosphor-react-native'

import { Title } from './Title'

interface RecipePresentationProps {
  title: string
  imageOne: string
  imageTwo?: string
  imageThree?: string
  preparationTime: number
  owner: string
}

export function RecipePresentation(props: RecipePresentationProps) {
  const {
    title,
    imageOne,
    imageTwo,
    imageThree,
    preparationTime,
    owner
  } = props

  return (
    <>
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
    </>
  )
}