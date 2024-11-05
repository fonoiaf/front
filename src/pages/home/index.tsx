import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import MarketingPage from './sub/MarketingPage';

// ----------------------------------------------------------------------

export default function Page() {
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

      <MarketingPage />
    </>
  );
}
