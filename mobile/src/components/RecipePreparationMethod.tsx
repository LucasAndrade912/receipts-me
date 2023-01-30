import { Text, VStack } from 'native-base'

import { Title } from './Title'

interface RecipePreparationMethodProps {
  preparationMethod: string[]
}

export function RecipePreparationMethod({ preparationMethod }: RecipePreparationMethodProps) {
  return (
    <VStack justifyContent="flex-start" w="full">
      <Title type="subtitle" textAlign="center">
        Mão na massa
      </Title>

      <VStack mt={8}>
        { preparationMethod.map((item, index) => (
          <Text
            key={index}
            fontSize="sm"
            fontFamily="regular"
          >
            {`\u2022 ${item}`}
          </Text>
        )) }
      </VStack>
    </VStack>
  )
}