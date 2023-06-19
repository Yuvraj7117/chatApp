import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './redux/App';
import App from "./App"
// import { UserProvider } from './ContextData';
// import { CalProvider } from './ContextCal';
//redux

import {store} from './redux/store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <UserProvider>
  //   <CalProvider>
  <Provider store={store}>
    <App />
  </Provider>
  //   </CalProvider>
  // </UserProvider>
);