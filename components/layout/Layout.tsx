import React from 'react';
import { Header } from '../header';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {/* <Header />
    <Container maxWidth="lg" className="layout_container">
      <Breadcrumbs location={location} />
      {children}
    </Container>
    <Footer /> */}
    <Header />
    {children}
  </div>
);
