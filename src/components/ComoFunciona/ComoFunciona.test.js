import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ComoFunciona from './ComoFunciona';

describe('ComoFunciona', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <ComoFunciona /> )))).toMatchSnapshot();
  })
})
