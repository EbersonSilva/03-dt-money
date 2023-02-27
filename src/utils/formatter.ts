// Arquivo de formatação

// Formatação de Data
export const dateFormatter = new Intl.DateTimeFormat("pt-BR")
// Formatação de Number (R$)
export const priceFormatter = new Intl.NumberFormat('pt-BR',{
  style:'currency',
  currency:'BRL',
})