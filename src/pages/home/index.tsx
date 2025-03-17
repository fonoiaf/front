import { Helmet } from 'react-helmet-async';

import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { CONFIG } from 'src/config-global';

import FAQ from './components/FAQ';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Features from './components/Features';
import AppAppBar from './components/AppAppBar';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import LogoCollection from './components/LogoCollection';

export default function Page() {
  const defaultTheme = createTheme();

  return (
    <>
      <Helmet>
        <title> {`Home - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
        />
        <meta
          name="keywords"
          content="fono,iaf,fonoaudiologia,software,fala,problema,fonoiaf,sistema,kit,application,dashboard,admin,template"
        />
      </Helmet>

      <Box sx={{ flex: '1 1', overflow: 'auto' }}>
        <ThemeProvider theme={defaultTheme}>
          <CssBaseline enableColorScheme />

          <AppAppBar />
          <Hero />
          <div>
            <LogoCollection />
            <Features />
            <Divider />
            <Testimonials />
            <Divider />
            <Highlights />
            <Divider />
            <Pricing />
            <Divider />
            <FAQ />
            <Divider />
            <Footer />
          </div>
        </ThemeProvider>
      </Box>
    </>
  );
}

// # Marketing page template
// ## Usage
// <!-- #default-branch-switch -->

// 1. Copy the files into your project, or one of the [example projects](https://github.com/mui/material-ui/tree/master/examples).
// 2. Make sure your project has the required dependencies: @mui/material, @mui/icons-material, @emotion/styled, @emotion/react.
// 3. Import and use the `MarketingPage` component.

// ## Demo
// <!-- #default-branch-switch -->
// View the demo at https://mui.com/material-ui/getting-started/templates/marketing-page/.
