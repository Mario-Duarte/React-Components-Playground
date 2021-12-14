import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';
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
