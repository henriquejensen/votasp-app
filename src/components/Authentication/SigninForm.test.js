import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SigninForm from './SigninForm';

describe('SigninForm', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <SigninForm showLoginPage={jest.fn()} /> )))).toMatchSnapshot();
  })
})
