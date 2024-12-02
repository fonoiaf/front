import 'src/global.css';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import Fab from '@mui/material/Fab';

import { Router } from 'src/router';
// eslint-disable-next-line perfectionist/sort-imports
import { Iconify } from 'src/components/iconify';
// eslint-disable-next-line perfectionist/sort-imports
import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

// TRANSLATIONS ---------------------------------------------------
import home_en from 'src/translations/en/home.json';
import home_pt from 'src/translations/pt/home.json';
import user_en from 'src/translations/en/user.json';
import user_pt from 'src/translations/pt/user.json';
import common_en from 'src/translations/en/common.json';
import common_pt from 'src/translations/pt/common.json';
import signIn_pt from 'src/translations/pt/sign-in.json';
import signIn_en from 'src/translations/en/sign-in.json';
import { ThemeProvider } from 'src/theme/theme-provider';
import introduction_en from 'src/translations/en/introduction.json';
import introduction_pt from 'src/translations/pt/introduction.json';

// ---------------------------------------------------

export default function App() {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'pt',
    resources: {
      en: {
        common: common_en,
        user: user_en,
        home: home_en,
        introduction: introduction_en,
        signIn: signIn_en,
      },
      pt: {
        user: user_pt,
        common: common_pt,
        home: home_pt,
        introduction: introduction_pt,
        signIn: signIn_pt,
      },
    },
  });

  useScrollToTop();

  const githubButton = (
    <Fab
      size="medium"
      aria-label="Github"
      href="https://github.com/fonoiaf/front"
      sx={{
        zIndex: 9,
        right: 20,
        bottom: 20,
        width: 44,
        height: 44,
        position: 'fixed',
        bgcolor: 'grey.800',
        color: 'common.white',
      }}
    >
      <Iconify width={24} icon="eva:github-fill" />
    </Fab>
  );

  return (
    <I18nextProvider i18n={i18next}>
      <ThemeProvider>
        <Router />
        {githubButton}
      </ThemeProvider>
    </I18nextProvider>
  );
}
