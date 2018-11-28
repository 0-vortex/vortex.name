/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Document, { Head, NextScript } from 'next/document';

const globalHeight = css`
  min-height: 100vh;
  height: 100vh;
`;

export default class VortexDotNameDocument extends Document {
  render() {
    const { html } = this.props;

    return (
      <html
        lang="en"
        dir="ltr"
        css={globalHeight}
      >
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>
        <body css={globalHeight}>
          <div id="__next" css={globalHeight} dangerouslySetInnerHTML={{ __html: html }} />
          <NextScript />
        </body>
      </html>
    );
  }
}
