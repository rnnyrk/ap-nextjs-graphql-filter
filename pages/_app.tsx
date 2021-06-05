import { ThemeProvider } from 'styled-components';

import { GlobalStyling } from 'styles';
import theme from 'styles/theme';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyling />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
