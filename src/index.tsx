import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import { Theme as ThemeProvider } from './styles/theme';
import GlobalStyle from './styles/global';

import store from './redux/configureStore';

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <GlobalStyle />
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
