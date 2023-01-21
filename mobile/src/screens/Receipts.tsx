import { FlatList, View } from 'native-base'

import { Title } from '../components/Title'
import { Category } from '../components/Category'
import { Container } from '../components/Container'
import { ReceiptCard } from '../components/ReceiptCard'

import { categoriesMock, receiptsMock } from '../utils/mocks'

export function Receipts() {
  return (
    <Container>
      <View mt={8} ml={6} mb={7}>
        <Title type="subtitle" mb={4}>
          Você pode filtar por categorias
        </Title>

        <FlatList
          data={categoriesMock}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Category key={item.id} { ...item } />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          _contentContainerStyle={{ pb: 1 }}
        />
      </View>

      <Title type="subtitle" ml={6} mb={4}>
        Veja nossas receitas
      </Title>

      <FlatList
        data={receiptsMock}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ReceiptCard key={item.id} { ...item } />
        )}
        showsVerticalScrollIndicator={false}
        _contentContainerStyle={{ pb: 6, px: 6 }}
      />
    </Container>
  )
}