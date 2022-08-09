import { ImageList, ImageListItem } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { FullscreenViewer } from '../../components/fullscreen-viewer';
import { PageTitle } from '../../components/page-title';
import { ILicensePage, ILicensePageFields } from '../../contentful';
import { client } from '../../contentful/client';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { renderRichText } from '../../utility/renderRichText';

type Props = {
  data: ILicensePage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  const width = useWindowWidth();
  let imagesPerRow = 3;

  if (width) {
    if (width >= 850) imagesPerRow = 3;
    else if (width >= 480) imagesPerRow = 2;
    else imagesPerRow = 1;
  }

  return (
    <div>
      <PageTitle text={data.fields.title} />
      {renderRichText(data.fields.content)}
      {data.fields.images && (
        <ImageList cols={imagesPerRow} gap={20} style={{ marginTop: 20 }}>
          {data.fields.images.map((image) => (
            <FullscreenViewer withPointer key={image.sys.id}>
              <ImageListItem style={{ minWidth: 280 }}>
                {/* <span>text</span> */}
                <Image
                  key={image.sys.updatedAt}
                  src={`http:${image.fields.file.url}`}
                  // layout="responsive"
                  width={image.fields.file.details.image!.width}
                  height={image.fields.file.details.image!.height}
                />
              </ImageListItem>
            </FullscreenViewer>
          ))}
        </ImageList>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<ILicensePageFields>({ content_type: 'licensePage' });

  const [data] = page.items;
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default Page;
