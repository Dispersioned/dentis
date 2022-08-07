import { Container } from '@mui/material';
import React from 'react';

import { Breadcrumbs } from '../breadcrumbs';
import { Footer } from '../footer';
import { Header } from '../header';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    <Header />
    <Container maxWidth="lg">
      <Breadcrumbs />
      {children}
    </Container>
    <Footer />
  </div>
);
