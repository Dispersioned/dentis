import { Typography, styled } from '@mui/material';
import React from 'react';

type PageTitleProps = {
  text: string;
};

const Text = styled(Typography)`
  font-size: 3.5rem;
  margin: 1.5rem 0;
  @media (max-width: 1199px) {
    font-size: 3rem;
    margin: 1.2rem 0;
  }
  @media (max-width: 991px) {
    font-size: 2.5rem;
    margin: 1rem 0;
  }
  @media (max-width: 767px) {
    font-size: 2.2rem;
  }
  @media (max-width: 575px) {
    font-size: 2rem;
    margin: 0.8rem 0;
  }
`;

export const PageTitle = ({ text }: PageTitleProps) => {
  return <Text variant="h1">{text}</Text>;
};
