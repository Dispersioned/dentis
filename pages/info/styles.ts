import { Button, styled } from '@mui/material';

export const MenuLayout = styled('div')`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 30px;
`;

export const MenuItem = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 35px 15px;
  font-size: 1.4rem;
`;
