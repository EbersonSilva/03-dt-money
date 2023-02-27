import { useContext } from 'react' //Importação do Context de transaçoes
import { Header } from '../../components/Header' //Importação do componente Header
import { Summary } from '../../components/Summary'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter' //Importação do Formatador
import { SearchForm } from './components/SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable
} from './styles'

export function Transactions() {
  // Configuração de importação da lista de transações.
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {/* Condição para acrescentar o traço de negativo quando a transação foi outcome e formatação de valores */}
                      {transaction.type === 'outcome' && '- '}
                      {priceFormatter.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {/* Configuração de formatação da data da tabela de transactions */}
                    {dateFormatter.format(new Date(transaction.createdAt))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
