import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './Footer';

describe('Footer', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <Footer /> )))).toMatchSnapshot();
  })
})
