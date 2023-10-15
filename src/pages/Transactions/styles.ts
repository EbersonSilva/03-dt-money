import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`
//Estilização da tabela
export const TransactionsTable = styled.table`
width: 100%;
border-collapse: separate;//Borda qu separa as linhas da tabela
border-spacing: 0 0.5rem; // Espaçamento da borda.
margin-top: 1.5rem ;

//Estilização da linha da tabela
td{
padding: 1.25rem 2rem ;
background: ${props => props.theme["gray-700"]};

//Bordas arredondadas da esquerda
&:first-child{
  border-top-left-radius:6px; 
  border-bottom-left-radius: 6px;
}

//Bordas arredondadas da direita
&:last-child{
  border-top-right-radius:6px; 
  border-bottom-right-radius: 6px;
}
}
`
//Configuração de propriedade para atribuição de cor em Entradas e Saidas.
interface PriceHighLightProps{
  variant: 'income' | 'outcome'
}
//Condicional de cor para Entradas e Saidas.
export const PriceHighLight = styled.span<PriceHighLightProps>`
color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`