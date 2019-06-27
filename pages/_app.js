import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import makeStore from "../redux";
import getPageContext from "../src/getPageContext";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <MuiThemeProvider theme={this.pageContext.theme}>
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </MuiThemeProvider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(MyApp);
