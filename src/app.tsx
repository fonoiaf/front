import 'src/global.css';

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

import Fab from '@mui/material/Fab';

import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { ThemeProvider } from 'src/theme/theme-provider';
import { Iconify } from 'src/components/iconify';

// TRANSLATIONS ---------------------------------------------------
import home_en from 'src/translations/en/home.json';
import home_pt from 'src/translations/pt/home.json';
import common_en from 'src/translations/en/common.json';
import common_pt from 'src/translations/pt/common.json';
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
        home: home_en,
        introduction: introduction_en,
      },
      pt: {
        common: common_pt,
        home: home_pt,
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
