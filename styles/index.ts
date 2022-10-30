import { styled } from '@mui/material';

export const PageLayout = styled('div')`
  min-height: calc(100vh - 69px);

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled('div')`
  padding: calc(80px + 3vw) 20px 30px 20px;
  @media (max-width: 991px) {
    padding-top: 5px;
  }
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

export const SideImage = styled('div')`
  display: flex;
  height: 100%;
  @media (max-width: 991px) {
    height: 350px;
    grid-row: 1;
  }
  @media (max-width: 767px) {
    height: 300px;
  }
  @media (max-width: 575px) {
    height: 250px;
  }
  @media (max-width: 479px) {
    height: 200px;
  }
`;
