//Configuração para compartilha a lista de transações com os demais componentes.

import { ReactNode, useEffect, useState, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios' // Importação do axios

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface CreateTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  //Configuração da busca de transactions .

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt', //Configuração de ordem de acriação a lista de transações.
        _order: 'desc',
        q: query
      }
    })

    setTransactions(response.data)
  }, [])

  //O Hook useCallback serve para evitar que a função seja recriada em memoria.
  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date()
      })
      setTransactions(state => [response.data, ...state])
    },
    []
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])
  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransaction
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
