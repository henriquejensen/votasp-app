import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import PassosComoFunciona from './PassosComoFunciona';

describe('PassosComoFunciona', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <PassosComoFunciona /> )))).toMatchSnapshot();
  })
})
