import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`
width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;

margin-top: -5rem;
<<<<<<< HEAD
border: 1px solid red;
`

export const SummaryCard = styled.div`
background: ${props => props.theme["gray-600"]};
border-radius: 6px;
padding: 2rem;

header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${props => props.theme["gray-300"]};
}

`

=======
`;

interface SummaryCardProps{
  variant?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]}
  }

  strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${props => props.variant === 'green' && css`
  background: ${props.theme["green-700"]};
  `}
`;
>>>>>>> 454c5b63582a4590600d8f4f47ecdb3346aaff46
