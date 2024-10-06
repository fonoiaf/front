import type {} from '@mui/material/themeCssVarsAugmentation';
import type { PaletteMode, ThemeOptions } from '@mui/material/styles';

import { getDesignTokens } from './themePrimitives';
import {
  inputsCustomizations,
  feedbackCustomizations,
  surfacesCustomizations,
  navigationCustomizations,
  dataDisplayCustomizations,
} from './customizations';

export default function getMPTheme(mode: PaletteMode): ThemeOptions {
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
