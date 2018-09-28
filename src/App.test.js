import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from './App';

describe('App', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <App /> )))).toMatchSnapshot();
  })
})
