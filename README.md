# TP Next-Admin

## Referents

- [ReactJS](https://reactjs.org/)
- [NextJS Basic Setup](https://nextjs.org/learn/basics/create-nextjs-app)
- [Ant Design](https://ant.design/)
- [Charts Ant Design](https://charts.ant.design/)

## Libs

```bash
yarn add @zeit/next-css @zeit/next-sass antd
```

## Setup base

Create jsconfig.json with content

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "exclude": ["node_modules", "out"]
}
```

Create next.config.js with content

```js
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withSass(withCSS({
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });
    
    config.resolve.alias['@'] = __dirname

    return config
  },
}))
```

Update `pages/_app.js`

```jsx
import React from "react";
import Head from "next/head";

import LayoutDefault from "@/layouts/default";

import 'antd/dist/antd.css'
import "@/assets/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>TP NextJS-Admin</title>
      </Head>
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </React.Fragment>
  );
}

export default MyApp
```

## Run App
```bash
yarn
yarn dev
```
