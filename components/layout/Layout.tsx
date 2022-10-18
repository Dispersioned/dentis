import { Container } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

import { Breadcrumbs } from '../breadcrumbs';
import { Footer } from '../footer';
import { Header } from '../header';

type LayoutProps = React.PropsWithChildren;
export const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();
  console.log(router);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container maxWidth="lg" style={{ height: '100%' }}>
        <Breadcrumbs />
        {children}
      </Container>
      <Footer disable={router.route === '/'} />
    </div>
  );
};
