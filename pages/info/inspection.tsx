import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';

import { PageTitle } from '../../components/page-title';
import { IInspectionPage, IInspectionPageFields } from '../../contentful';
import { client } from '../../contentful/client';

type HomeProps = {
  data: IInspectionPage;
};

const Home: NextPage<HomeProps> = ({ data }: HomeProps) => {
  return (
    <div>
      <PageTitle text={data.fields.title} />
      {documentToReactComponents(data.fields.content, {
        renderNode: {
          [BLOCKS.PARAGRAPH]: (node, children) => <Typography>{children}</Typography>,
          [BLOCKS.HEADING_1]: (node, children) => (
            <Typography variant="h1" fontWeight="bold" style={{ marginTop: '3rem' }}>
              {children}
            </Typography>
          ),
          [BLOCKS.HEADING_2]: (node, children) => (
            <Typography variant="h2" fontWeight="bold" style={{ marginTop: '2.5rem' }}>
              {children}
            </Typography>
          ),
          [BLOCKS.HEADING_3]: (node, children) => (
            <Typography variant="h3" fontWeight="bold" style={{ marginTop: '2.2rem' }}>
              {children}
            </Typography>
          ),
          [BLOCKS.HEADING_4]: (node, children) => (
            <Typography variant="h4" fontWeight="bold" style={{ marginTop: '2rem' }}>
              {children}
            </Typography>
          ),
          [BLOCKS.HEADING_5]: (node, children) => (
            <Typography variant="h5" fontWeight="bold" style={{ marginTop: '1.5rem' }}>
              {children}
            </Typography>
          ),
          [BLOCKS.HEADING_6]: (node, children) => (
            <Typography variant="h6" fontWeight="bold" style={{ marginTop: '1.2rem' }}>
              {children}
            </Typography>
          ),
        },
        renderText: (text) => {
          return text.split('\n').reduce((children: any, textSegment: string, index: number) => {
            // eslint-disable-next-line react/no-array-index-key
            return [...children, index > 0 && <br key={index} />, textSegment];
          }, []);
        },
      })}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<IInspectionPage>({ content_type: 'inspectionPage' });

  const [data] = page.items;
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default Home;
