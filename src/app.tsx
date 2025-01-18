import './global.css';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import Fab from '@mui/material/Fab';

// TRANSLATIONS ---------------------------------------------------
import { ThemeProvider } from '#/theme/theme-provider';

import { useScrollToTop } from '#/hooks/use-scroll-to-top';

import { Iconify } from '#/components/iconify';

import home_en from '#/translations/en/home.json';
import home_pt from '#/translations/pt/home.json';
import user_en from '#/translations/en/user.json';
import user_pt from '#/translations/pt/user.json';
import common_en from '#/translations/en/common.json';
import common_pt from '#/translations/pt/common.json';
import signIn_pt from '#/translations/pt/sign-in.json';
import signIn_en from '#/translations/en/sign-in.json';
import phoneme_en from '#/translations/en/phoneme.json';
import phoneme_pt from '#/translations/pt/phoneme.json';
import introduction_en from '#/translations/en/introduction.json';
import introduction_pt from '#/translations/pt/introduction.json';

import { Router } from './router';

// ---------------------------------------------------

export default function App() {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'pt',
    resources: {
      en: {
        user: user_en,
        home: home_en,
        signIn: signIn_en,
        common: common_en,
        phoneme: phoneme_en,
        introduction: introduction_en,
      },
      pt: {
        user: user_pt,
        home: home_pt,
        signIn: signIn_pt,
        common: common_pt,
        phoneme: phoneme_pt,
        introduction: introduction_pt,
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
