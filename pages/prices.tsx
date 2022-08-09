import { Document } from '@contentful/rich-text-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Button } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import { useRef } from 'react';

import { PageTitle } from '../components/page-title';
import { IPricesPage, IPricesPageFields } from '../contentful';
import { client } from '../contentful/client';
import { Details, Heading, Summary } from '../styles/info/prices';
import { renderPriceTab } from '../utility/renderPriceTab';

type Props = {
  data: IPricesPage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  const pricelistNodes = data.fields.pricelist.content;
  const tabHeadingNodes = pricelistNodes.filter((node) => node.nodeType === 'heading-5');
  const tabTableNodes = pricelistNodes.filter((node) => node.nodeType === 'table');

  const rootRef = useRef<HTMLDivElement>(null);
  const handleOpenAll = () => {
    if (!rootRef.current) return;
    rootRef.current
      .querySelectorAll('.accordion-click-area .MuiButtonBase-root[aria-expanded="false"]')
      .forEach((node) => (node as HTMLElement).click());
  };

  return (
    <div ref={rootRef}>
      <PageTitle text={data.fields.title} />
      {tabHeadingNodes.length > 0 && (
        <>
          <Button style={{ margin: '0.5rem 0' }} onClick={handleOpenAll}>
            Раскрыть все
          </Button>
          {tabHeadingNodes.map((headingNode, i) => (
            <Accordion className="accordion-click-area" key={Math.random()}>
              <Summary expandIcon={<ExpandMoreIcon style={{ color: '#fff' }} />}>
                {/* i know better
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment 
              // @ts-ignore */}
                <Heading variant="h5">{headingNode.content[0].value}</Heading>
              </Summary>
              <Details>{renderPriceTab(tabTableNodes[i] as unknown as Document)}</Details>
            </Accordion>
          ))}
        </>
      )}
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
