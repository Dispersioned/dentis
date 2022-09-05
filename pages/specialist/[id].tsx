import { Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { PageTitle } from '../../components/page-title';
import { IDoctor, IDoctorFields } from '../../contentful';
import { client } from '../../contentful/client';
import { ContentLayout, ImageContainer } from '../../styles/info/specialist';
import { renderRichText } from '../../utility/renderRichText';

type Props = {
  doctor: IDoctorFields;
};

const Page: NextPage<Props> = ({ doctor }: Props) => {
  return (
    <div>
      <PageTitle text={doctor.name} />
      <ContentLayout>
        <div>
          <Typography variant="overline" fontSize={16} fontWeight="bold">
            {doctor.specialization}
          </Typography>
          {renderRichText(doctor.bio)}
        </div>
        <ImageContainer>
          <Image src={'https:' + doctor.photo.fields.file.url} layout="fill" objectFit="cover" />
        </ImageContainer>
      </ContentLayout>
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
