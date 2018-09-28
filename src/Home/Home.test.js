import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from './Home';

describe('Home', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <Home /> )))).toMatchSnapshot();
  })
})
