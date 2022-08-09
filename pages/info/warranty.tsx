import type { GetStaticProps, NextPage } from 'next';

import { PageTitle } from '../../components/page-title';
import { IWarrantyPage, IWarrantyPageFields } from '../../contentful';
import { client } from '../../contentful/client';
import { renderRichText } from '../../utility/renderRichText';

type Props = {
  data: IWarrantyPage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  return (
    <div>
      <PageTitle text={data.fields.title} />
      {renderRichText(data.fields.content)}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<IWarrantyPageFields>({ content_type: 'warrantyPage' });

  const [data] = page.items;
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default Page;
