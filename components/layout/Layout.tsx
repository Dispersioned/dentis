import React from 'react';

type LayoutProps = React.PropsWithChildren;

export const Layout = ({ children }: LayoutProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
    {/* <Header />
    <Container maxWidth="lg" className="layout_container">
      <Breadcrumbs location={location} />
      {children}
    </Container>
    <Footer /> */}
    {children}
  </div>
);
