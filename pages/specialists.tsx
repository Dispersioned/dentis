import { CardContent, Typography } from '@mui/material';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import { PageTitle } from '../components/page-title';
import { IDoctor, ISpecialistsPage, ISpecialistsPageFields } from '../contentful';
import { client } from '../contentful/client';
import { DoctorCard, Doctors, ImageContainer } from '../styles/info/specialists';
import { renderRichText } from '../utility/renderRichText';

type Props = {
  data: ISpecialistsPage;
};

const Page: NextPage<Props> = ({ data }: Props) => {
  const doctors = data.fields.doctors as unknown as IDoctor[];

  return (
    <div>
      <PageTitle text={data.fields.title} />
      <Doctors>
        {doctors.map((doctor) => (
          <DoctorCard key={Math.random()}>
            <ImageContainer>
              <Image src={'https:' + doctor.fields.photo.fields.file.url} layout="fill" objectFit="cover" />
            </ImageContainer>
            <CardContent>
              <Typography variant="h4">{doctor.fields.name}</Typography>
              <Typography variant="overline" fontSize={16} fontWeight="bold">
                {doctor.fields.specialization}
              </Typography>
              {renderRichText(doctor.fields.bio)}
            </CardContent>
          </DoctorCard>
        ))}
      </Doctors>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const page = await client.getEntries<ISpecialistsPageFields>({ content_type: 'specialistsPage' });

  const [data] = page.items;
  return {
    props: { data },
    revalidate: 3600,
  };
};

export default Page;
