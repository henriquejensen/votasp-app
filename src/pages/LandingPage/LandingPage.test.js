import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import LandingPage from './LandingPage';

describe('LandingPage', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <LandingPage /> )))).toMatchSnapshot();
  })
})
