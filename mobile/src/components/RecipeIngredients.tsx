import { Text, VStack } from 'native-base'

import { Title } from './Title'

interface RecipeIngredientsProps {
  ingredients: {
    quantity: number
    name: string
    type?: 'quantity' | 'weight'
  }[]
}

export function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  return (
    <VStack justifyContent="flex-start" w="full">
      <Title type="subtitle" textAlign="center">
        Ingredientes
      </Title>

      <VStack mt={8}>
        { ingredients.map(ingredient => (
          <Text
            key={ingredient.name}
            fontSize="sm"
            fontFamily="regular"
          >
            {`\u2022 ${ingredient.quantity} ${ingredient.name}`}
          </Text>
        )) }
      </VStack>
    </VStack>
  )
}