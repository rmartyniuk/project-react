
import App from './App';
import './styles/normalize.scss';
import './styles/global.scss';
import 'font-awesome/css/font-awesome.min.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import { createRoot } from 'react-dom/client';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider >
  </BrowserRouter>
)

// import ReactDOM from 'react-dom';
// import App from './App';
// import './styles/normalize.scss';
// import './styles/global.scss';
// import 'font-awesome/css/font-awesome.min.css';

// ReactDOM.render(
//   <App />,
//   document.querySelector('#root')
// );