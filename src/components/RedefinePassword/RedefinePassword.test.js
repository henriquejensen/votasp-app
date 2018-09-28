import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import RedefinePassword from './RedefinePassword';

describe('RedefinePassword', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <RedefinePassword /> )))).toMatchSnapshot();
  })
})