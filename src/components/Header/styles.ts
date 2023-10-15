import styled from "styled-components";

// Estilização do Header
export const HeaderContainer = styled.header`
background: ${props => props.theme["gray-900"]};
padding: 2.5rem 0 7.5rem;

`;
// Estilização do conteudo que esta dentro da Header
export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin:  0 auto;
  padding: 0 1.5rem;

/* Alinhamento do conteudo da Header */
  display: flex;
  align-items: center;
  justify-content:space-between;
`

/* Estilização do botão de nova transação. */
export const NewTransactionButton = styled.button`
height: 50px;
border: 0;
background: ${props => props.theme["green-500"]};
color: ${props => props.theme["white"]};
font-weight: bold;
padding: 0 1.25rem;
border-radius: 6px;
cursor: pointer;

&:hover {
  background: ${props => props.theme["green-700"]};
  transition: background-color 0.2s; //Efeito na cor somente quando passa o mouse por cima
}
`