// Compondente de Summary, onde esta os card de controle de valores de entrada, saida e Total.

import { SummaryCard, SummaryContainer } from './styles'
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'
import { priceFormatter } from '../../utils/formatter' //Importação da formatação dos valores de entrada, saida e Total
import { useSummary } from '../../hooks/useSummary' //Importação do Hook criado useSummary

export function Summary() {
  //Atibuição do hook criado para a variavel de summary
  const summary = useSummary()

  return (
    <SummaryContainer>
      {/* Card 1 */}
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>
        <strong>{priceFormatter.format(summary.income)}</strong>
      </SummaryCard>

      {/* card 2 */}
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>
        <strong>{priceFormatter.format(summary.outcome)}</strong>
      </SummaryCard>

      {/* card 3 */}
      {/* Propriedade de cor atribuida para o card Total */}
      <SummaryCard variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff" />
        </header>
        <strong>{priceFormatter.format(summary.total)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}
