import type {} from '@mui/lab/themeAugmentation';
import type { Theme } from '@mui/material/styles';
import type {} from '@mui/material/themeCssVarsAugmentation';

import CssBaseline from '@mui/material/CssBaseline';
import { extendTheme, ThemeProvider, shouldSkipGeneratingVar } from '@mui/material/styles';

import { shadows, components, typography, colorSchemes, customShadows } from './core';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function CustomTheme({ children }: Props) {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export function createTheme(): Theme {
  const initialTheme = {
    colorSchemes,
    shadows: shadows(),
    customShadows: customShadows(),
    shape: { borderRadius: 8 },
    components,
    typography,
    cssVarPrefix: '',
    shouldSkipGeneratingVar,
  };

  const theme = extendTheme(initialTheme);

  return theme;
}
