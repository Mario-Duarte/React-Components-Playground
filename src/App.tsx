import GlobalStyles, { AppStyles } from './App.styles';
import { Footer } from 'appComponents/Footer';
import { AppHero } from 'appComponents/AppHero';

function App() {
  return (
    <>
      <GlobalStyles/>
      <AppStyles />
      <AppHero />
      <Footer />
    </>
  );
}

export default App;
