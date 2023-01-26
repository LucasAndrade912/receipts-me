import { Text, VStack } from 'native-base'

import { Title } from './Title'

interface ReceiptIngredientsProps {
  ingredients: {
    quantity: number
    name: string
    type?: 'quantity' | 'weight'
  }[]
}

export function ReceiptIngredients({ ingredients }: ReceiptIngredientsProps) {
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