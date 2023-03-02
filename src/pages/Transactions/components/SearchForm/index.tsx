import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form' //Importação do useForm para validação de formulário
import { SearchFormContainer } from './styles'
import * as z from 'zod' //Importação do Schema de formulário 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, context => {
    return context.fetchTransactions
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  //Função modificada para simular a demora de 2s para o envio do formulário
  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
