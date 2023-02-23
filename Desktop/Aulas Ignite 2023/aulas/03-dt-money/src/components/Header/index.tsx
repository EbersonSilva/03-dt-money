import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles' //Importação de estilização.

import logoImg from '../../assets/logo.svg' //Importação da Logo

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
