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

  @media (max-width: 991px) {
    gap: 15px;
  }
  @media (max-width: 767px) {
    grid-template:
      'title' auto
      'info' auto
      'address' auto
      'codes' auto
      'inspection' auto / auto;
  }
`;
