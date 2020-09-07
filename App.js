import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ThemeProvider from "./common/theme";
import store from "./store";
import Layout from "./src/components/Layout";
import "./App.scss";
import ErrorBoundary from "./common/ErrorBoundary";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <ThemeProvider>
            <div className="App">
              <Layout />
            </div>
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
