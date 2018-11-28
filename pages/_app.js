import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from 'emotion-theming';

const theme = {
  color: 'red',
  backgroundColor: '#252627',
};

export default class VortexDotNameApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    );
  }
}
