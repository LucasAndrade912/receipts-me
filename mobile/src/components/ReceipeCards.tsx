import { FlatList } from 'native-base'
import { useNavigation } from '@react-navigation/native'

import { ReceiptCard } from './ReceiptCard'

interface RecipeCardsProps {
  recipes: {
    id: string
    title: string
    imageUrl: string
    owner: string
    stars: number
    favorited?: boolean
  }[]
}

export function RecipeCards({ recipes }: RecipeCardsProps) {
  const { navigate } = useNavigation()

  return (
    <FlatList
      data={recipes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ReceiptCard
          key={item.id}
          onPress={() => navigate('receipt', { id: item.id })}
          { ...item }
        />
      )}
      showsVerticalScrollIndicator={false}
      _contentContainerStyle={{ pb: 6, px: 6 }}
    />
  )
}