import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';

import { PageTitle } from '../components/page-title';
import { IPricesPage, IPricesPageFields } from '../contentful';
import { client } from '../contentful/client';
import { ROUTES } from '../routes';
import { ContentLayout, ServiceBtn } from '../styles/services';

type Props = {
  data: IPricesPage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  const pricelistNodes = data.fields.pricelist.content;
  const tabHeadingNodes = pricelistNodes.filter((node) => node.nodeType === 'heading-5');

  return (
    <div>
      <PageTitle text="Услуги" />
      <ContentLayout>
        {tabHeadingNodes.map((node) => {
          const text = (node.content[0] as { value: string }).value;
          return (
            <Link
              key={text}
              href={{
                pathname: 'prices',
                query: { open: text },
              }}
            >
              <ServiceBtn variant="contained">{text}</ServiceBtn>
            </Link>
          );
        })}
      </ContentLayout>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<IPricesPageFields>({ content_type: 'pricesPage' });

  const [data] = page.items;
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default Page;
