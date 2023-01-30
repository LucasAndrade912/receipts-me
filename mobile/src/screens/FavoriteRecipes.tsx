import { VStack } from 'native-base'

import { Title } from '../components/Title'
import { Container } from '../components/Container'
import { Categories } from '../components/Categories'
import { RecipeCards } from '../components/ReceipeCards'

import { categoriesMock, recipesMock } from '../utils/mocks'

export function FavoriteRecipes() {
  const favoriteRecipes = recipesMock.filter(recipe => recipe.favorited)

  return (
    <Container>
      <VStack mt={8} ml={6} mb={7}>
        <Title type="subtitle" mb={4}>
          Você pode filtar por categorias
        </Title>

        <Categories categories={categoriesMock} />
      </VStack>

      <Title type="subtitle" ml={6} mb={4}>
        Suas receitas favoritas
      </Title>

      <RecipeCards recipes={favoriteRecipes} />
    </Container>
  )
}