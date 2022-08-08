import { Link as MUILink } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { ROUTES } from '../../../config';
import { NavLinks } from '../styles/Navigation';
import s from '../styles/Navigation.module.css';

export const Navigation = () => {
  const router = useRouter();
  return (
    <nav>
      <NavLinks>
        {ROUTES.map((data) => (
          <li key={data.to}>
            <Link href={`/${data.to}`}>
              <MUILink
                style={{ cursor: 'pointer' }}
                className={router.asPath.includes(data.to) ? `${s.navlink} ${s.active}` : s.navlink}
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
