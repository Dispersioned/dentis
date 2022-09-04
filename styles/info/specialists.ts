import { styled } from '@mui/material';

export const Doctors = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: fit-content(100%);
  grid-gap: 30px;
`;

export const DoctorCard = styled('div')`
  display: flex;
  grid-template-columns: 1fr 2fr;
  overflow: hidden;
`;

export const ImageContainer = styled('div')`
  height: 500px;
  width: 100%;
  position: relative;
  border-radius: 3px;
  overflow: hidden;
`;
