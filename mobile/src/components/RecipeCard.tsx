import { Star } from 'phosphor-react-native'
import {
  Pressable,
  View,
  Text,
  Image,
  HStack,
  IPressableProps
} from 'native-base'

interface RecipeCardProps extends IPressableProps {
  id: string
  title: string
  imageUrl: string
  owner: string
  stars: number
  favorited?: boolean
}

export function RecipeCard({
  id,
  title,
  imageUrl,
  owner,
  stars,
  favorited = false,
  ...rest
}: RecipeCardProps) {
  return (
    <Pressable
      _pressed={{
        opacity: 0.7
      }}
      w="full"
      bgColor="light.100"
      flexDirection="row"
      justifyContent="space-between"
      px={4}
      py={3}
      mb={4}
      shadow={2}
      rounded={8}
      { ...rest }
    >
      <HStack alignItems="center">
        <Image
          source={{
            uri: imageUrl
          }}
          alt={title}
          w={16}
          h={16}
          bgColor="light.50"
          rounded="full"
          mr={4}
        />

        <View>
          <Text
            mb={2}
            fontSize="md"
            fontFamily="medium"
            color="black.50"
            maxWidth={40}
          >
            { title }
          </Text>

          <Text
            mb={2}
            fontSize="xs"
            fontFamily="regular"
            color="black.200"
          >
            De {(
              <Text ml={2} fontFamily="semibold" color="red.50">
                { owner }
              </Text>
            )}
          </Text>

          <HStack alignItems="center">
            <Star
              size={10}
              color="#535558"
              weight="fill"
              style={{ marginRight: 4 }}
            />

            <Text fontSize="2xs" color="black.200">
              { stars }
            </Text>
          </HStack>
        </View>
      </HStack>

      <Pressable
        height={6}
        _pressed={{
          opacity: 0.7,
          color: '#571A0E'
        }}
      >
        <Star
          size={24}
          color="#571A0E"
          weight={favorited ? 'fill' : 'regular'}
        />
      </Pressable>
    </Pressable>
  )
}