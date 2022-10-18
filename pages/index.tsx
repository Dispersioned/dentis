import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { PageTitle } from '../components/page-title';
import { IHomePage } from '../contentful';
import { client } from '../contentful/client';
import { Content, PageLayout, SideImage } from '../styles';
import { renderRichText } from '../utility/renderRichText';

type Props = {
  data: IHomePage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  const image = data.fields.backgroundImage;

  return (
    <PageLayout>
      <Content>
        <PageTitle text="Дентис" />
        <div>{renderRichText(data.fields.content)}</div>
      </Content>
      <SideImage>
        <Image
          src={`http:${image.fields.file.url}`}
          objectFit="cover"
          width={image.fields.file.details.image!.width}
          height="100%"
        />
      </SideImage>
    </PageLayout>
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
