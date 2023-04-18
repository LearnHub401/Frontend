import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core'
import App from './App';

import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MantineProvider>
  </React.StrictMode>
);

// basic user
// display user
// auth
// lesson
// installs
