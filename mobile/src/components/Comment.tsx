import { VStack, HStack, Text, Image } from 'native-base'
import dayjs from 'dayjs'

interface CommentProps {
  avatarUrl: string
  owner: string
  date: Date
  comment: string
}

export function Comment({ avatarUrl, owner, date, comment }: CommentProps) {
  const formattedDate = dayjs(date).locale('pt-BR').format('DD/MM/YYYY')

  return (
    <VStack
      w="full"
      px={6}
      py={3}
      bgColor="light.100"
      rounded="lg"
      mb={4}
    >
      <HStack
        justifyContent="space-between"
        alignItems="center"
      >
        <HStack alignItems="center">
          <Image
            w={7}
            h={7}
            source={{ uri: avatarUrl }}
            alt={`${owner} Avatar`}
            rounded="full"
          />

          <Text
            color="dark.100"
            fontSize="sm"
            fontFamily="regular"
            ml={2}
          >
            { owner }
          </Text>
        </HStack>

        <Text
          color="dark.100"
          fontSize="sm"
          fontFamily="regular"
        >
          { formattedDate }
        </Text>
      </HStack>

      <Text
        mt={4}
        color="dark.200"
        fontSize="xs"
        fontFamily="regular"
      >
        { comment }
      </Text>
    </VStack>
  )
}