// Compondente de Summary, onde esta os card de controle de valores de entrada, saida e Total.

import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Summary() {
  //Importação da lista de transações que vem do Context.
  const { transactions } = useContext(TransactionsContext)
  console.log(transactions)

  return (
    <SummaryContainer>
      {/* Card 1 */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      {/* card 2 */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>R$ 1.259,00</strong>
      </SummaryCard>

      {/* card 3 */}
      {/* Propriedade de cor atribuida para o card Total */}
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>R$ 16.141,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
