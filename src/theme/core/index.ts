import type { Theme, CssVarsThemeOptions } from '@mui/material/styles';

import { extendTheme, createTheme } from '@mui/material/styles';

import shadows from './shadows';
import customShape from './shape';
// import customColors from './colors';
import customTypography from './typography';
import customComponents from './components';
import customColorsJson from './colors.json';
import customShadows from './custom-shadows';

// ----------------------------------------------------------------------

export default function coreTheme(): Theme {
  // const initialTheme: CssVarsThemeOptions = {
  // const initialTheme = {
  const initialTheme: CssVarsThemeOptions = {
    cssVarPrefix: '',
    shadows: shadows(),
    shape: customShape(),
    colorSchemes: {
      ...customColorsJson,
      light: {
        palette: {
          mode: 'light',
        },
      },

      dark: {
        palette: {
          mode: 'dark',
        },
      },
      // custom: {
      //   palette: {},
      //   opacity: {},
      //   overlays: undefined,
      // },
    },

    defaultColorScheme: 'light',

    // colorSchemes: customColors(),
    typography: customTypography(),
    components: customComponents(),
    customShadows: customShadows(),
    shouldSkipGeneratingVar: customShouldSkipGeneratingVar,
  };

  // const theme = extendTheme(initialTheme);
  const customTheme = createTheme({
    // cssVarPrefix: '',
    shadows: shadows(),
    shape: customShape(),
    colorSchemes: {
      ...customColorsJson,
      light: {
        palette: {
          mode: 'light',
        },
      },

      dark: {
        palette: {
          mode: 'dark',
        },
      },
    },

    defaultColorScheme: 'light',

    // colorSchemes: customColors(),
    typography: customTypography(),
    components: customComponents(),
    customShadows: customShadows(),
    
    // shouldSkipGeneratingVar: customShouldSkipGeneratingVar,
  });

  // return theme;
  return customTheme;
}

// ----------------------------------------------------------------------

function customShouldSkipGeneratingVar(keys: string[], value: string | number): boolean {
  const skipGlobalKeys = [
    'mixins',
    'overlays',
    'direction',
    'typography',
    'breakpoints',
    'transitions',
    'cssVarPrefix',
    'unstable_sxConfig',
  ];

  const skipPaletteKeys: {
    [key: string]: string[];
  } = {
    global: ['tonalOffset', 'dividerChannel', 'contrastThreshold'],
    grey: ['A100', 'A200', 'A400', 'A700'],
    text: ['icon'],
  };

  const isPaletteKey = keys[0] === 'palette';

  if (isPaletteKey) {
    const paletteType = keys[1];
    const skipKeys = skipPaletteKeys[paletteType] || skipPaletteKeys.global;

    return keys.some((key) => skipKeys?.includes(key));
  }

  return keys.some((key) => skipGlobalKeys?.includes(key));
}
