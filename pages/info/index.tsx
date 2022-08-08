import type { NextPage } from 'next';
import Link from 'next/link';

import { PageTitle } from '../../components/page-title';
import { ROUTES } from '../../config';
import { MenuItem, MenuLayout } from './styles';

const Home: NextPage = () => {
  const route = ROUTES.find((route) => route.text === 'Клиентам');
  return (
    <div>
      <PageTitle text="Клиентам" />
      <MenuLayout>
        {route?.subroutes?.map((subroute) => (
          <Link key={subroute.to} href={`${route.to}/${subroute.to}`}>
            <MenuItem variant="contained">{subroute.text}</MenuItem>
          </Link>
        ))}
      </MenuLayout>
    </div>
  );
};

export default Home;
