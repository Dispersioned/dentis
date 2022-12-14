import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useWindowWidth } from '../../../hooks/useWindowWidth';
import { Buttons, ContactBtn, Content, MobileNavigation, Wrapper } from '../styles/Header';
import { Burger } from './Burger';
import { ContactForm } from './ContactForm';
import { Navigation } from './Navigation';

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
  }, [isActive]);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const width = useWindowWidth();

  return (
    <Wrapper position="sticky">
      <header>
        <Content>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a style={{ display: 'flex' }}>
              <Image
                src="/logo.svg"
                alt="logo"
                style={{ zIndex: 1000 }}
                width={180}
                height={55}
                onClick={() => setIsActive(false)}
              />
            </a>
          </Link>
          {width && width > 1400 ? (
            <>
              <Navigation onClose={() => setIsActive(false)} />
              <Buttons>
                <ContactBtn variant="text" href="tel:+79385058423">
                  +7 (938) 505 84 23
                </ContactBtn>
                <ContactBtn onClick={() => setIsFormOpen(true)} variant="contained">
                  Записаться
                </ContactBtn>
              </Buttons>
            </>
          ) : (
            <>
              <Burger active={isActive} onClick={() => setIsActive(!isActive)} />
              <MobileNavigation active={isActive}>
                <Navigation onClose={() => setIsActive(false)} />
                <Buttons>
                  <ContactBtn onClick={() => setIsFormOpen(true)} variant="contained">
                    Записаться
                  </ContactBtn>
                  <ContactBtn variant="text" href="tel:+79385058423">
                    +7 (938) 505 84 23
                  </ContactBtn>
                </Buttons>
              </MobileNavigation>
            </>
          )}
        </Content>
      </header>
      <ContactForm open={isFormOpen} handleClose={() => setIsFormOpen(false)} />
    </Wrapper>
  );
};
