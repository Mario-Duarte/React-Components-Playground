import React from 'react';
import { ThemeProvider } from '@mui/material';
import theme from 'theme/theme';
import GlobalStyles from 'App.styles';
import { Footer } from 'appComponents/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
