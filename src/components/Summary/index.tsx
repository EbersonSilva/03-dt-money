// Compondente de Summary, onde esta os card de controle de valores de entrada, saida e Total.

import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { useContext } from 'react'
import { TransactionsContext } from '../../contexts/TransactionsContext'

export function Summary() {
  //Importação da lista de transações que vem do Context.
  const { transactions } = useContext(TransactionsContext)
  //Configuração de reduce para reduzir o array de transações ára a seguinte estrutura
  //acc = acumulator
  //Condição para calcular de total, se o tipo de transação for entrada ou saida
  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price
        acc.total += transaction.price //Soma
      } else {
        acc.outcome += transaction.price
        acc.total -= transaction.price //Subtração
      }
      return acc
    },
    {
      income: 0,
      outcome: 0,
      total: 0
    }
  )

  return (
    <SummaryContainer>
      {/* Card 1 */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{summary.income}</strong>
      </SummaryCard>

      {/* card 2 */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{summary.outcome}</strong>
      </SummaryCard>

      {/* card 3 */}
      {/* Propriedade de cor atribuida para o card Total */}
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
