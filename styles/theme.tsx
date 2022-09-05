import { createTheme } from '@mui/material/styles';

const headFont = 'Playfair Display, sans-serif';

const globalTheme = createTheme({
  palette: {
    mode: 'light'
  },
  typography: {
    fontFamily: 'Roboto',
    
    h1: {
        fontFamily: headFont,        
    },
    h2: {
        fontFamily: headFont,        
    },
    h3: {
        fontFamily: headFont,        
    },
    h4: {
        fontFamily: headFont,        
    },
    h5: {
        fontFamily: headFont,        
    },
    h6: {
        fontFamily: headFont,        
    },
  },
});

export default globalTheme;