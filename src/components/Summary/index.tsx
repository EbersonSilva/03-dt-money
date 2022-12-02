import { SummaryCard, SummaryContainer } from "./styles";
import {ArrowCircleUp, ArrowCircleDown, CurrencyDollar} from 'phosphor-react'

export function Summary(){
  return(
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Saidas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

<<<<<<< HEAD
      <SummaryCard>
=======
      <SummaryCard variant="green">
>>>>>>> 454c5b63582a4590600d8f4f47ecdb3346aaff46
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  )
}