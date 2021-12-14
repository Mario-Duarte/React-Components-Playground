import { ThemeProvider } from 'styled-components';
import { addDecorator } from '@storybook/react';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { CssBaseline } from "@mui/material";
import theme from '../src/theme/theme';
import GlobalStyle from '../src/App.styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: 'centered',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    inlineStories: false,
    iframeHeight: "700px",
  },
}

addDecorator((Story) => (
  <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    </EmotionThemeProvider>
));
