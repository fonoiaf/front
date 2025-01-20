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

export {};
