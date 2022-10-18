import { Typography } from '@mui/material';

type FooterProps = {
  disable?: boolean;
};

export const Footer = ({ disable = false }: FooterProps) => {
  return (
    <footer style={{ marginTop: 'auto', padding: '1rem', display: disable ? 'none' : 'unset' }}>
      <Typography fontSize={15} textAlign="center">
        © ДЕНТиС 2022
      </Typography>
    </footer>
  );
};
