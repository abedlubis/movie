import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider} from 'react-redux';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';


import { getHomeModule } from './modules/home/homeModule';
import { getSearchModule } from './modules/search/searchModule';
import { initialHomeState } from './utils/utility';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const store: IModuleStore<any> = createStore(
  {
    initialState: {
      /** initial state */
      homeState: initialHomeState,
    },
    enhancers: [
      /** enhancers to include */
    ],
    extensions: [getThunkExtension()],
  },
  getHomeModule(),
  getSearchModule()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter> 
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
