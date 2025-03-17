import type {} from '@mui/lab/themeAugmentation';
import type {} from '@mui/material/themeCssVarsAugmentation';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import coreTheme from './core';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function CustomTheme({ children }: Props) {
  const theme = coreTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
