import { styled } from '@mui/material';

export const Content = styled('div', { shouldForwardProp: (p) => p !== 'bgImage' })<{ bgImage: string }>`
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 35px;
  width: 100%;
  height: 100%;
  background: url(${(props) => props.bgImage}) center center;
  background-size: cover;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    opacity: 0.1;
  }
`;

export const Text = styled('div')`
  position: relative;
  left: -2px;
  margin-top: 15vw;
  padding: 15px 25px 15px 15px;
  backdrop-filter: blur(1px);
  border-radius: 2px;
  background: rgba(255, 255, 255, 0.9);

  p {
    font-size: 20px;
    color: #0a1c1a;
  }
  max-width: max(900px, 40%);
`;
