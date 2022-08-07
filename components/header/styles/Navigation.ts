import { styled } from '@mui/material';

export const NavLinks = styled('ul')`
  position: relative;
  z-index: 1001;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;
  justify-content: flex-start;
  list-style-type: none;

  @media (max-width: 1400px) {
    justify-content: center;
    grid-gap: 10px;
    grid-auto-flow: row;
  }
`;
