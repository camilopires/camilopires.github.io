/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.astro' {
  const Component: any;
  export default Component;
}

interface ImportMetaEnv {
  readonly DEV_MAINTENANCE?: string;
}