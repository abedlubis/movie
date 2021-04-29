import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, IModuleStore } from 'redux-dynamic-modules';
import App from '../App';

const store: IModuleStore<any> = createStore({});
let wrapped = shallow(
  <Provider store={store}>
    <App />
  </Provider>
);

describe('App', () => {
  it('should render the App correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
