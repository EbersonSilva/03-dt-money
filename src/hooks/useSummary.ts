// Hook próprio criado para utilização dos demais hooks da aplicação.

import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary(){
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
  return summary
}