import '../styles/globals.css'
/* eslint-disable react/jsx-props-no-spreading */
import Layout from '../src/components/layout'
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import globalTheme from '../styles/theme';
import Switch from '@mui/material/Switch';

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("light");

  const theme = createTheme({
    ...globalTheme,
    palette: {
      mode: selectedTheme
    },
  });

  useEffect(() => {
    const data = window.localStorage.getItem('MY_APP_STATE');
    if ( data !== null ) setSelectedTheme(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('MY_APP_STATE', JSON.stringify(selectedTheme));
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Switch onChange={() => setSelectedTheme(selectedTheme === "light" ? "dark" : "light")} />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp