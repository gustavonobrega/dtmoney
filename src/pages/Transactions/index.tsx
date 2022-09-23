import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'

import { PriceHighligh, TransactionsContainer, TransactionsTable } from './styles'

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  category: string;
  price: number;
  createdAt: string;
}

export function Transactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    async function  loadTransactions() {
      const response = await fetch('http://localhost:3333/transactions');
      const data = await response.json();

      setTransactions(data);
    }

    loadTransactions();
  }, [])
  
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => (
              <tr key={transaction.id} >
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighligh variant={transaction.type}>
                    {transaction.price}
                  </PriceHighligh>
                </td>
                <td>{transaction.category}</td>
                <td>{transaction.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}


