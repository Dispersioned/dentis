import type { NextPage } from 'next';
import Link from 'next/link';

import { PageTitle } from '../../components/page-title';
import { ROUTES } from '../../routes';
import { MenuItem, MenuLayout } from '../../styles/info/styles';

const Page: NextPage = () => {
  const navRoute = ROUTES.find((route) => route.text === 'Клиентам');
  return (
    <div>
      <PageTitle text="Клиентам" />
      <MenuLayout>
        {navRoute?.subroutes?.map((subroute) => (
          <Link key={subroute.to} href={`${navRoute.to}/${subroute.to}`}>
            <MenuItem variant="contained">{subroute.text}</MenuItem>
          </Link>
        ))}
      </MenuLayout>
    </div>
  );
};

export default Page;
