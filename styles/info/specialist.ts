import { styled } from '@mui/material';

export const DoctorInfo = styled('div')`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  grid-gap: 25px;

  @media (max-width: 991px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled('div')`
  position: relative;
  height: 700px;
  border-radius: 3px;
  overflow: hidden;
  @media (max-width: 991px) {
    max-height: 500px;
  }
  @media (max-width: 575px) {
    max-height: 400px;
  }
`;

export const Certificates = styled('div')`
  margin-top: 30px;
`;
