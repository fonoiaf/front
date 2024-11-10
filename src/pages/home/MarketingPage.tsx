import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import Divider from '@mui/material/Divider';
import CssBaseline from '@mui/material/CssBaseline';

import { CONFIG } from 'src/config-global';

import FAQ from './components/FAQ';
import Hero from './components/Hero';
import AppTheme from './theme/AppTheme';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Features from './components/Features';
import AppAppBar from './components/AppAppBar';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import LogoCollection from './components/LogoCollection';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  const { t } = useTranslation('home');

  return (
    <>
      <Helmet>
        <title> {`${t('helmet')} - ${CONFIG.appName}`}</title>
        <meta
          name="description"
          content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
        />
        <meta
          name="keywords"
          content="fono,iaf,fonoaudiologia,software,fala,problema,fonoiaf,sistema,kit,application,dashboard,admin,template"
        />
      </Helmet>

      <AppTheme {...props}>
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
      </AppTheme>
    </>
  );
}
