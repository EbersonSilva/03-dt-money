import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles' //Importação de estilização.
import * as Dialog from '@radix-ui/react-dialog' //Importa a biblioteca Radix-ui

import logoImg from '../../assets/logo.svg' //Importação da Logo
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        {/* Configuração do modal de nova transação com Radix-ui*/}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova Transação</NewTransactionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
