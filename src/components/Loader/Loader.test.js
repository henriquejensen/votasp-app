import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Loader from './Loader';

describe('Loader', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <Loader /> )))).toMatchSnapshot();
  })
})
