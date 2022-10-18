import { styled } from '@mui/material';

export const PageLayout = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr 2fr;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const Content = styled('div')`
  padding: calc(80px + 3vw) 20px 30px 20px;
  @media (max-width: 767px) {
    padding-top: 5px;
  }
`;

export const SideImage = styled('div')`
  display: flex;
  height: 100%;
  @media (max-width: 767px) {
    height: 290px;
    grid-row: 1;
    margin-top: 70px;
  }
  @media (max-width: 575px) {
    height: 250px;
  }
  @media (max-width: 479px) {
    height: 200px;
  }
`;
