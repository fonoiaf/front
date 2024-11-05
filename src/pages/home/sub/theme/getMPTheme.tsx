import type {} from '@mui/material/themeCssVarsAugmentation';
// import type { PaletteMode, ThemeOptions } from '@mui/material/styles';

import type { ThemeOptions } from '@mui/material/styles';

import { getDesignTokens } from './themePrimitives';
import {
  inputsCustomizations,
  feedbackCustomizations,
  surfacesCustomizations,
  navigationCustomizations,
  dataDisplayCustomizations,
} from './customizations';

export type PaletteMode = 'light' | 'dark';

export default function getMPTheme(mode: PaletteMode): ThemeOptions | any {
  return {
    ...getDesignTokens(mode),
    components: {
      ...inputsCustomizations,
      ...dataDisplayCustomizations,
      ...feedbackCustomizations,
      ...navigationCustomizations,
      ...surfacesCustomizations,
    },
  };
}
