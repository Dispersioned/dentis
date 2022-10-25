import { Link as MUILink } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { ROUTES } from '../../../routes';
import { NavLinks } from '../styles/Navigation';
import s from '../styles/Navigation.module.css';

type NavigationProps = {
  onClose: () => void;
};

export const Navigation = ({ onClose }: NavigationProps) => {
  const router = useRouter();
  const isActiveLink = (link: string) => router.asPath.includes(link);
  const shouldClose = (link: string) => router.asPath.endsWith(link);

  return (
    <nav>
      <NavLinks>
        {ROUTES.map((data) => (
          <li key={data.to}>
            <Link href={`/${data.to}`}>
              <MUILink
                onClick={() => {
                  if (!shouldClose(data.to)) onClose();
                }}
                style={{ cursor: 'pointer' }}
                className={isActiveLink(data.to) ? `${s.navlink} ${s.active}` : s.navlink}
                fontFamily="Nunito, sans-serif"
              >
                {data.text}
              </MUILink>
            </Link>
          </li>
        ))}
      </NavLinks>
    </nav>
  );
};
