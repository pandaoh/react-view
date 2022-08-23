// eslint-disable-next-line spaced-comment
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REQUEST_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
