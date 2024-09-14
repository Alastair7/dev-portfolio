// src/custom.d.ts

declare module "*.svg" {
  import * as React from "react";

  // React component export for SVGs
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  // Default export for importing as a file URL
  const src: string;
  export default src;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}
