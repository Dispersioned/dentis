import { Button, styled } from '@mui/material';

export const ContentLayout = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 30px;
  @media (max-width: 991px) {
    grid-gap: 20px;
  }
  justify-content: center;
`;

export const ServiceBtn = styled(Button)`
  position: relative;
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

  &::before {
    content: '(Смотреть цены)';
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    font-weight: normal;
    color: #b8b8b8;
    transition: all 0.3s ease-out;
    opacity: 0;
  }

  &:hover::before {
    top: 75%;
    opacity: 1;
  }
`;
