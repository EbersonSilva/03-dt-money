import { ThemeProvider } from 'styled-components' //Configuração de tema geral na aplicação
import { Transactions } from './pages/Transactions' //Importação de Transactions.
import { GlobalStyle } from './styles/global' //Importação de styles Globais
import { defaultTheme } from './styles/themes/default' //Importação doa temas criado.

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Transactions />
    </ThemeProvider>
  )
}
