//Configuração para compartilha a lista de transações com os demais componentes.

import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios' // Importação do axios

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  //Configuração da busca de transactions .

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        q: query
      }
    })

    setTransactions(response.data)
  }

  useEffect(() => {
    fetchTransactions()
  }, [])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
