import { Helmet } from 'react-helmet-async';

import { CONFIG } from 'src/config-global';
import { UserView } from 'src/pages/user/components/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title> {`Palvras - ${CONFIG.appName}`}</title>
      </Helmet>

      <UserView />
    </>
  );
}
