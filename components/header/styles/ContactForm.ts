import styled from '@emotion/styled';
import { DialogTitle } from '@mui/material';

export const FormTitle = styled(DialogTitle)`
  font-size: 35px;

  @media (max-width: 1199px) {
    font-size: 32px;
  }
  @media (max-width: 991px) {
    font-size: 27px;
  }
  @media (max-width: 575px) {
    font-size: 23px;
  }
  @media (max-width: 479px) {
    font-size: 20px;
  }
`;
