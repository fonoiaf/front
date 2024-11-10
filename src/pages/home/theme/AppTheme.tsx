import type { ThemeOptions } from '@mui6/material/styles';

import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui6/material/styles';

import { inputsCustomizations } from './customizations/inputs';
import { feedbackCustomizations } from './customizations/feedback';
import { surfacesCustomizations } from './customizations/surfaces';
import { navigationCustomizations } from './customizations/navigation';
import { dataDisplayCustomizations } from './customizations/dataDisplay';
import { shape, shadows, typography, colorSchemes } from './themePrimitives';

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions['components'];
}

export default function AppTheme({ children, disableCustomTheme, themeComponents }: AppThemeProps) {
  const theme = React.useMemo(
    () =>
      disableCustomTheme
        ? {}
        : createTheme({
            // For more details about CSS variables configuration, see https://mui.com/material-ui/customization/css-theme-variables/configuration/
            cssVariables: {
              colorSchemeSelector: 'data-mui-color-scheme',
              cssVarPrefix: 'template',
            },
            colorSchemes, // Recently added in v6 for building light & dark mode app, see https://mui.com/material-ui/customization/palette/#color-schemes
            typography,
            shadows,
            shape,
            components: {
              ...inputsCustomizations,
              ...dataDisplayCustomizations,
              ...feedbackCustomizations,
              ...navigationCustomizations,
              ...surfacesCustomizations,
              ...themeComponents,
            },
          }),
    [disableCustomTheme, themeComponents]
  );

  if (disableCustomTheme) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider theme={theme} disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
