import { Typography } from '@mui/material';
import React from 'react';

type PageTitleProps = {
  text: string;
};

export const PageTitle = ({ text }: PageTitleProps) => {
  return (
    <Typography component="h1" variant="h2" style={{ margin: '1.5rem 0' }}>
      {text}
    </Typography>
  );
};
