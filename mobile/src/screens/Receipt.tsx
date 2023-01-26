import { ScrollView, Divider, VStack } from 'native-base'

import { Container } from '../components/Container'

import { Comment } from '../components/Comment'
import { ReceiptIngredients } from '../components/ReceiptIngredients'
import { ReceiptPresentation } from '../components/ReceiptPresentation'
import { ReceiptPreparationMethod } from '../components/ReceiptPreparationMethod'
import { ReceiptCommentField } from '../components/ReceiptCommentField'

import { receiptMock } from '../utils/mocks'

export function Receipt() {
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
  } = receiptMock

  return (
    <Container>
      <ScrollView
        py={8}
        px={6}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 80 }}
      >
        <ReceiptPresentation
          title={title}
          imageOne={imageOne}
          imageTwo={imageTwo}
          imageThree={imageThree}
          preparationTime={preparationTime}
          owner={owner}
        />

        <Divider my={8} bgColor="light.100" />

        <ReceiptIngredients
          ingredients={ingredients}
        />

        <Divider my={8} bgColor="light.100" />

        <ReceiptPreparationMethod
          preparationMethod={preparationMethod}
        />

        <Divider my={8} bgColor="light.100" />

        <ReceiptCommentField />

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