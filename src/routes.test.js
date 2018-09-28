import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Routes from './routes';

describe('Footer', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <Routes /> )))).toMatchSnapshot();
  })

  it('should match a snapshot', () => {
    expect(toJson(shallow(( <Routes /> )))).toMatchSnapshot();
  })
})
