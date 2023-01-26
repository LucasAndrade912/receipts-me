import { Input, Text } from 'native-base'

import { Button } from './Button'

export function ReceiptCommentField() {
  return (
    <>
      <Input
        h={24}
        multiline
        borderColor="light.100"
        textAlignVertical="top"
        rounded="lg"
        padding={3}
        placeholder="Colabore com esta receita enviando um comentário"
        fontSize="xs"
        fontFamily="regular"
        autoCorrect={false}
        mb={3}
        _focus={{
          bgColor: 'light.50',
          borderColor: 'light.200'
        }}
      />

      <Button w="full">
        <Text
          color="light.50"
          fontSize="sm"
          fontFamily="medium"
          textTransform="uppercase"
        >
          Enviar Comentário
        </Text>
      </Button>
    </>
  )
}