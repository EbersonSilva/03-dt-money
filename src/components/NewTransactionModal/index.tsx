import { zodResolver } from '@hookform/resolvers/zod'
import * as Dialog from '@radix-ui/react-dialog' //Importa a biblioteca Radix-ui.
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react' //Importa os icones.
import { useContext } from 'react'
import { Controller, useForm } from 'react-hook-form' // Importação do react-hook-form.
import * as z from 'zod'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { api } from '../../lib/axios'
import {
  CloseButton,
  Content,
  Overlay,
  TransactionButton,
  TransactionType
} from './styles'

//Schema de dados do formulário de nova transação
const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type NewTransactionFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
  const { createTransaction } = useContext(TransactionsContext)
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset
  } = useForm<NewTransactionFormInputs>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      //Definido o botão de entrada como padrao.
      type: 'income'
    }
  })

  //Configuração para enviar dados do formulario newTransaction para o server.json.
  async function handleCreateNewTransaction(data: NewTransactionFormInputs) {
    const { description, price, category, type } = data
    //Caminho para onde vai as informacões de transactions.
    await createTransaction({
      description,
      price,
      category,
      type
    })
    //Reet no formulario depois do envio dos dados
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />
          {/* Criado um Controle para pegar o valor de entrada e saida */}
          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionButton variant="income" value="income">
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionButton>
                  <TransactionButton variant="outcome" value="outcome">
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionButton>
                </TransactionType>
              )
            }}
          />

          <button type="submit" disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
