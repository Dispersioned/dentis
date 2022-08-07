import { AppBar, Button, styled } from '@mui/material';

export const Wrapper = styled(AppBar)`
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 1000;
  }
`;

export const Content = styled('div')`
  display: grid;
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
  grid-gap: 10px;
  align-items: center;
  padding: 7px 15px;
`;

export const MobileNavigation = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  position: fixed;
  left: 0;
  top: ${(props) => (props.active ? '0' : '-100%')};
  padding: 80px 15px 20px;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(7px);
  width: 100%;
  height: 100vh;
  z-index: 999;
  transition: all 0.3s ease;
  overflow: auto;
`;

export const Buttons = styled('div')`
  position: relative;
  z-index: 1001;
  @media (max-width: 1400px) {
    display: grid;
    grid-gap: 10px;
    justify-content: center;
    padding-top: 10px;
  }
`;

export const ContactBtn = styled(Button)`
  font-size: 20px;
  @media (max-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const SubmitBtn = styled(Button)`
  margin-top: 1.5rem;
`;
