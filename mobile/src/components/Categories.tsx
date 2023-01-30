import { FlatList } from 'native-base'

import { Category } from './Category'

interface CategoriesProps {
  categories: {
    id: string
    title: string
    selected?: boolean
  }[]
}

export function Categories({ categories }: CategoriesProps) {
  return (
    <FlatList
      data={categories}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Category key={item.id} { ...item } />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      _contentContainerStyle={{ pb: 1 }}
    />
  )
}