import * as Dialog from '@radix-ui/react-dialog';
import { Content, Overlay } from './styles';

export function NewTransactionModal(){
  return(
    <Dialog.Portal>
          <Overlay/>

          <Content>
            <Dialog.Title>Nova transação</Dialog.Title>

            <form action="">
              <input type="text" placeholder='Descrição' required />
              <input type="text" placeholder='Descrição' required />
              <input type="text" placeholder='Descrição' required /> 
            </form>
            <Dialog.Close/>
          </Content>
          
        </Dialog.Portal>
  )
}