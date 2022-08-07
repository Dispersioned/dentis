import { styled } from '@mui/material';

export const Body = styled('div', {
  shouldForwardProp: (prop) => prop !== 'active',
})<{active: boolean}>`
  display: block;
  width: 50px;
  height: 50px;
  position: relative;
  cursor: pointer;
  justify-self: flex-end;
  z-index: 1001;

  &::before,
  &::after,
  span {
    position: absolute;
    display: block;
    width: 35px;
    height: 2px;
    background-color: ${(props) => props.theme.palette.primary.main};
    border-radius: 5px;
    left: 50%;
    transition: all 0.3s ease;
  }

  &::before,
  &::after {
    content: '';
  }

  &::before {
    top: ${(props) => (props.active ? 'calc(50% - 2px)' : '20%')};
    transform: ${(props) => (props.active ? 'translate(-50%, 50%) rotate(45deg)' : 'translate(-50%, 50%)')};
  }

  span {
    left: 50%;
    top: 50%;
    transform: ${(props) => (props.active ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -50%)')};
  }

  &::after {
    bottom: ${(props) => (props.active ? 'calc(50% - 2px)' : '20%')};
    transform: ${(props) => (props.active ? 'translate(-50%, -50%) rotate(135deg)' : 'translate(-50%, -50%)')};
  }
`;
