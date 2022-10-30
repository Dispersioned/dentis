import { CacheProvider, EmotionCache } from '@emotion/react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useEffect } from 'react';
import { YMaps } from 'react-yandex-maps';

import { Layout } from '../components/layout';
import '../lib/userHelperLibrary/styles.css';
import userhelperlibrary from '../lib/userHelperLibrary/userHelperLibrary';
import '../styles/reset.css';
import { theme } from '../styles/theme/theme';
import { createEmotionCache } from '../utility/createEmotionCache';

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
    userhelperlibrary({ destroy: false, lang: 'ru' });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <YMaps>
          <CssBaseline />
          <Head>
            <title>ДЕНТиС - стоматология в Ростове-на-Дону</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </YMaps>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
