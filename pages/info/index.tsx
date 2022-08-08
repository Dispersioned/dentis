import type { NextPage } from 'next';
import Link from 'next/link';

import { PageTitle } from '../../components/page-title';
import { ROUTES } from '../../config';
import { MenuItem, MenuLayout } from './styles';

const Home: NextPage = () => (
  <div>
    <PageTitle text="Клиентам" />
    <MenuLayout>
      {ROUTES.find((route) => route.text === 'Клиентам')?.subroutes?.map((subroute) => (
        <Link key={subroute.to} href={`./${subroute.to}`}>
          <MenuItem variant="contained">{subroute.text}</MenuItem>
        </Link>
      ))}
    </MenuLayout>
  </div>
);

export default Home;
