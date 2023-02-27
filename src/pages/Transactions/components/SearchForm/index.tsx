import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form' //Importação do useForm para validação de formulário
import { SearchFormContainer } from './styles'
import * as z from 'zod' //Importação do Schema de formulário 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
  query: z.string(),
})


type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {

  const {register, handleSubmit} =  useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })
  function handleSearchTransactions(data: SearchFormInputs){
    console.log(data)
  }
  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input type="text" 
      placeholder="Busque por transações"
      {...register('query')} 
      />
      <button type="submit">
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
