import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';

import { UserView } from './components/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Usuarios - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserView />
    </>
  );
}
