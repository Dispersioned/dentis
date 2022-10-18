import { Typography, styled } from '@mui/material';

export const Doctors = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: fit-content(100%);
  grid-gap: 30px;
`;

export const DoctorCard = styled('div')`
  display: grid;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr 1.5fr;
  }
  @media (max-width: 991px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled('div')`
  height: 500px;
  width: 100%;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
`;

export const DoctorName = styled(Typography)`
  cursor: pointer;
`;
