import '../styles/globals.css'
/* eslint-disable react/jsx-props-no-spreading */
import Layout from '../src/components/Layout';
import type { AppProps } from 'next/app'
import { ThemeProvider, createTheme, PaletteMode } from '@mui/material';
import { FormGroup, FormControlLabel, Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import globalTheme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedTheme, setSelectedTheme] = useState<string>("light");
  const [toggleCheck, setToggleCheck] = useState<boolean>(false);

  const theme = createTheme({
    ...globalTheme, 
    palette: {
      mode: selectedTheme as PaletteMode
    },
  });

  useEffect(() => {
    const data = window.localStorage.getItem('themeOption');
    if ( data !== null ) setSelectedTheme(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('themeOption', JSON.stringify(selectedTheme));
    selectedTheme == 'dark' ? setToggleCheck(() => true) : setToggleCheck(() => false);
  }, [selectedTheme]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <FormGroup>
          <FormControlLabel 
            control={ 
              <Switch 
                onChange={() => setSelectedTheme(selectedTheme === "light" ? "dark" : "light")}
                checked={toggleCheck}
              />
            } 
            label="Dark mode"
            />
        </FormGroup>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp