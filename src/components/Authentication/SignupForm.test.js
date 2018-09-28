import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SignupForm from './SignupForm';

describe('SignupForm', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <SignupForm showLoginPage={jest.fn()} /> )))).toMatchSnapshot();
  })
})
