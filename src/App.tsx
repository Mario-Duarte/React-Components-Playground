import React from 'react';
import { StyledEngineProvider } from '@mui/styled-engine';
import { ThemeProvider } from '@mui/material';
import theme from 'theme/theme';
import GlobalStyles from 'App.styles';
import { Footer } from 'appComponents/Footer';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
