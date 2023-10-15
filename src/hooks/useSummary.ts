// Hook próprio criado para utilização dos demais hooks da aplicação.

import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../contexts/TransactionsContext"
import { useMemo } from "react" //Importação do Hook memo para memorizar variaveis 

export function useSummary(){
  //Importação da lista de transações que vem do Context.
  const transactions = useContextSelector(TransactionsContext, (context) =>{
    return context.transactions
  })
  //Configuração de reduce para reduzir o array de transações ára a seguinte estrutura
  //acc = acumulator
  //Condição para calcular de total, se o tipo de transação for entrada ou saida
  
  //Com a implementação do useMemo, a variavel Summary so ira ser recriada, quando o transaction mudar.
  const summary = useMemo(() => {
    return transactions.reduce(
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
  },[transactions])
  
  return summary
}