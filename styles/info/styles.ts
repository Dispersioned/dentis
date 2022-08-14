import { Button, styled } from '@mui/material';

export const MenuLayout = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-gap: 20px;
  }
  justify-content: center;
`;

export const MenuItem = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 35px 15px;
  font-size: 1.4rem;
  @media (max-width: 991px) {
    padding: 20px 10px;
  }
`;
