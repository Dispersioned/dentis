import { Container, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Map, Placemark } from 'react-yandex-maps';

import { Description, FooterLayout } from './styles';

export const Footer = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(typeof window !== 'undefined');
  }, []);

  return (
    <FooterLayout>
      <Description maxWidth="lg">
        <Typography variant="h4" style={{ gridArea: 'title' }}>
          Как нас найти:
        </Typography>
        <Typography style={{ gridArea: 'info' }}>
          г. Ростов-на-Дону, ул. Киргизская д.16
          <br />
          тел.<Link href="tel:+7(863)2964848">+7(863) 296-48-48</Link>
          <br />
          Электронная почта: <Link href="mailto:dentis-rostov@yandex.ru">dentis-rostov@yandex.ru</Link>
        </Typography>
        <Typography style={{ gridArea: 'codes' }}>
          ИНН 6166059433
          <br />
          КПП 616601001
          <br />
          ОГРН 1066166042535
        </Typography>
        <Typography style={{ gridArea: 'address' }}>
          Время работы клиники:
          <br />
          Понедельник-Воскресенье 9.00-20.00
        </Typography>
        <Typography style={{ gridArea: 'inspection' }}>
          61 № 0005122984 от 15.12.2006 г. выдано Инспекцией МНС России по Первомайскому району г. Ростова-на-Дону
          <br />№ ЛО-61-01-002384 от 15.08.2012 г. выдана Министерством здравоохранения Ростовской области
        </Typography>
      </Description>
      {isBrowser && (
        <Map defaultState={{ center: [47.27454102718205, 39.75565246990576], zoom: 17 }} width="100%" height={350}>
          <Placemark
            geometry={[47.27454102718205, 39.75565246990576]}
            properties={{
              hintContent: 'Дентис. Улица Киргизская, 16',
              balloonContent: 'Дентис. Улица Киргизская, 16',
            }}
            modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
          />
        </Map>
      )}
      <Container maxWidth="lg">
        <Typography fontSize={15} textAlign="center">
          © ДЕНТиС 2022
        </Typography>
      </Container>
    </FooterLayout>
  );
};
