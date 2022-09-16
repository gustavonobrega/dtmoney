import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionsContainer } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <h1>Transactions</h1>
      </TransactionsContainer>
    </div>
  )
}


