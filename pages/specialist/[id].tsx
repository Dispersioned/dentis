import { ImageList, ImageListItem, Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { FullscreenViewer } from '../../components/fullscreen-viewer';
import { PageTitle } from '../../components/page-title';
import { IDoctor, IDoctorFields } from '../../contentful';
import { client } from '../../contentful/client';
import { useWindowWidth } from '../../hooks/useWindowWidth';
import { Certificates, DoctorInfo, ImageContainer } from '../../styles/info/specialist';
import { renderRichText } from '../../utility/renderRichText';

type Props = {
  doctor: IDoctorFields;
};

const Page: NextPage<Props> = ({ doctor }: Props) => {
  const width = useWindowWidth();
  let imagesPerRow = 3;

  if (width) {
    if (width >= 850) imagesPerRow = 3;
    else if (width >= 480) imagesPerRow = 2;
    else imagesPerRow = 1;
  }

  return (
    <div>
      <PageTitle text={doctor.name} />
      <DoctorInfo>
        <div>
          <Typography variant="overline" fontSize={16} fontWeight="bold">
            {doctor.specialization}
          </Typography>
          {renderRichText(doctor.bio)}
        </div>
        <ImageContainer>
          <Image src={'https:' + doctor.photo.fields.file.url} layout="fill" objectFit="cover" />
        </ImageContainer>
      </DoctorInfo>
      <Certificates>
        <Typography variant="h3" textAlign="center">
          Сертификаты врача:
        </Typography>
        {doctor.certificates && (
          <ImageList cols={imagesPerRow} gap={20} style={{ gridColumn: '1 / 3', marginTop: 30 }}>
            {doctor.certificates.map((image) => (
              <FullscreenViewer withPointer key={image.sys.id}>
                <ImageListItem style={{ minWidth: 280 }}>
                  <Image
                    key={image.sys.updatedAt}
                    src={`http:${image.fields.file.url}`}
                    width={image.fields.file.details.image!.width}
                    height={image.fields.file.details.image!.height}
                  />
                </ImageListItem>
              </FullscreenViewer>
            ))}
          </ImageList>
        )}
      </Certificates>
    </div>
  );
};

export async function getStaticPaths() {
  const page = await client.getEntries<IDoctor>({ content_type: 'doctor' });

  return {
    paths: page.items.map((item) => ({
      params: {
        id: item.sys.id,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doctorId: string = params!.id as string;
  const data = await client.getEntry<IDoctor>(doctorId);

  return {
    props: { doctor: data.fields },
    revalidate: 3600,
  };
};

export default Page;
