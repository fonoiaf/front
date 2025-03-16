/// <reference types="vite/client" />

// export interface ProcessEnv {
//   [key: string]: string | undefined;
//   readonly VITE_APP_TITLE: string | undefined;
//   readonly TIMEOUT: number | undefined;
//   readonly API: string | undefined;
// }

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GITHUB_AUTH_TOKEN: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
      API: string;
      TIMEOUT: number;
    }
  }
}

interface ImportMetaEnv {
  readonly GITHUB_AUTH_TOKEN: string;
  readonly NODE_ENV: string;
  readonly PORT: string;
  readonly PWD: string;
  readonly API: string;
  readonly TIMEOUT: string;
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// --------------------------------------------------------------------
// ++++++++++++++++++++++++++ Custom ++++++++++++++++++++++++++++++++++
// --------------------------------------------------------------------

interface CustomShadows {
  z1?: string;
  z4?: string;
  z8?: string;
  z12?: string;
  z16?: string;
  z20?: string;
  z24?: string;
  //
  primary?: string;
  secondary?: string;
  info?: string;
  success?: string;
  warning?: string;
  error?: string;
  //
  card?: string;
  dialog?: string;
  dropdown?: string;
}

// --------------------------------------------------------------------
// Colors
interface ColorShades {
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
}

interface GreyShades {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
}

interface CommonColors {
  black: string;
  white: string;
}

interface ThemeColors {
  primary: ColorShades;
  secondary: ColorShades;
  info: ColorShades;
  success: ColorShades;
  warning: ColorShades;
  error: ColorShades;
  grey: GreyShades;
  common: CommonColors;
}
// Colors
// --------------------------------------------------------------------

declare module '@mui/material/styles' {
  interface Theme {
    customShadows: CustomShadows;
  }
  interface ThemeOptions {
    customShadows?: CustomShadows;
  }
  interface ThemeVars {
    customShadows: CustomShadows;
  }
  interface TypographyVariants {
    fontSecondaryFamily: React.CSSProperties['fontFamily'];
    fontWeightSemiBold: React.CSSProperties['fontWeight'];
  }
  interface TypographyVariantsOptions {
    fontSecondaryFamily?: React.CSSProperties['fontFamily'];
    fontWeightSemiBold?: React.CSSProperties['fontWeight'];
  }
  interface ThemeVars {
    typography: Theme['typography'];
  }
  interface ColorSchemeOverrides {
    primary: ColorShades;
    secondary: ColorShades;
    info: ColorShades;
    success: ColorShades;
    warning: ColorShades;
    error: ColorShades;
    grey: GreyShades;
    common: CommonColors;
  }
}

export {};
