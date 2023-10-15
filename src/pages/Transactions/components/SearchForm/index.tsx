import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form' //Importação do useForm para validação de formulário
import { SearchFormContainer } from './styles'
import * as z from 'zod' //Importação do Schema de formulário 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { memo } from 'react' //Importação do memo que serve para memorizar componentes

/* Por que um componente renderiza?

// - Hooks changed (mudou estado, context, reducer)
//  - Props changed (mudou propriedades)
// - Parent rendered (componente pai renderizou)

//Qual o fluxo de renderização
  1. O react recrua o HTML da interface daquele componente
  2. Compara a versão do HTML recriada com a versão anterior
  3. Se mudou alguma coisa, ele reescreve o HTML na tela

  MEMO: 
  0. Mudou alguma coisa Hooks changed, Props changed(deep comparison)
  0.1 Comparar com a verão anterior dos hooks e props
  0.2 Se mudou algo, ele vai permitit a nova renderização
*/

const searchFormSchema = z.object({
  query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponent() {
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

export const SearchForm = memo(SearchFormComponent)
