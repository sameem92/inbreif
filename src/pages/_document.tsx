import Document, { Html, Main, NextScript } from "next/document"

import React from "react"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ar">
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
