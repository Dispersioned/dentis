import { Container, styled } from '@mui/material';

export const FooterLayout = styled('footer')`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  gap: 15px;
  padding: 40px 0 15px;
`;
export const Description = styled(Container)`
  display: grid;
  grid-template:
    'title title' auto
    'info address' auto
    'codes inspection' auto / auto auto;
  gap: 20px;
`;
