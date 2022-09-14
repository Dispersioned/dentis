import type { GetStaticProps, NextPage } from 'next';

import { PageTitle } from '../components/page-title';
import { IHomePage } from '../contentful';
import { client } from '../contentful/client';
import { Content, Text } from '../styles';
import { renderRichText } from '../utility/renderRichText';

type Props = {
  data: IHomePage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  return (
    <Content bgImage={data.fields.backgroundImage.fields.file.url}>
      <Text>{renderRichText(data.fields.content)}</Text>
    </Content>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<IHomePage>({ content_type: 'home-page' });

  const [data] = page.items;
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default Page;
