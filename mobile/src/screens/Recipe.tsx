import { ScrollView, Divider, VStack } from 'native-base'

import { Container } from '../components/Container'

import { Comment } from '../components/Comment'
import { RecipeIngredients } from '../components/RecipeIngredients'
import { RecipePresentation } from '../components/RecipePresentation'
import { RecipePreparationMethod } from '../components/RecipePreparationMethod'
import { RecipeCommentField } from '../components/RecipeCommentField'

import { recipeMock } from '../utils/mocks'

export function Recipe() {
  const {
    title,
    imageOne,
    imageTwo,
    imageThree,
    preparationTime,
    owner,
    ingredients,
    preparationMethod,
    comments
  } = recipeMock

  return (
    <Container>
      <ScrollView
        py={8}
        px={6}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 80 }}
      >
        <RecipePresentation
          title={title}
          imageOne={imageOne}
          imageTwo={imageTwo}
          imageThree={imageThree}
          preparationTime={preparationTime}
          owner={owner}
        />

        <Divider my={8} bgColor="light.100" />

        <RecipeIngredients
          ingredients={ingredients}
        />

        <Divider my={8} bgColor="light.100" />

        <RecipePreparationMethod
          preparationMethod={preparationMethod}
        />

        <Divider my={8} bgColor="light.100" />

        <RecipeCommentField />

        <Divider my={8} bgColor="light.100" />

        <VStack w="full">
          { comments?.map((comment, index) => (
            <Comment
              key={index}
              { ...comment }
            />
          )) }
        </VStack>
      </ScrollView>
    </Container>
  )
}