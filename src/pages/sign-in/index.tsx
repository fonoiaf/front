import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { CONFIG } from 'src/config-global';

import { SignInView } from './auth';

// ----------------------------------------------------------------------

export default function SignIn() {
  const { t } = useTranslation('signIn');

  return (
    <>
      <Helmet>
        <title> {`${t('helmet')} - ${CONFIG.appName}`}</title>
      </Helmet>

      <SignInView />
    </>
  );
}
