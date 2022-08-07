import { Link as MUILink } from '@mui/material';
import Link from 'next/link';

import { ROUTES } from '../../../config';
import { NavLinks } from '../styles/Navigation';
import * as S from '../styles/Navigation.module.css';

export const Navigation = () => (
  <nav>
    <NavLinks>
      {ROUTES.map((data) => (
        <li key={data.text}>
          <Link href={`/${data.to}`}>
            <MUILink className={S.navlink} fontFamily="Nunito, sans-serif">
              {data.text}
            </MUILink>
          </Link>
        </li>
      ))}
    </NavLinks>
  </nav>
);
