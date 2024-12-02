import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { PhonemeView } from './components/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Fonemas - ${CONFIG.appName}`}</title>
      </Helmet>

      <PhonemeView />
    </>
  );
}
