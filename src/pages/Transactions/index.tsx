import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions(){
  return(
    <div>
      <Header/>
      <Summary />
      <TransactionsContainer>
      <TransactionsTable>
        <tbody>
        <tr>
            <td width="50%">Desenvolvimento de site</td>
            <td>R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/11/2022</td>
          </tr> 
          <tr>
            <td width="50%">Hamburguer</td>
            <td>- R$ 59,00</td>
            <td>Alimentação</td>
            <td>08/11/2022</td>
          </tr> 
          <tr>
            <td width="50%">Aluguel do apartamento</td>
            <td>- R$ 1.200,00</td>
            <td>Casa</td>
            <td>27/10/2022</td>
          </tr>
        </tbody>
      </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}