import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Realizacao from './Realizacao';

describe('Realizacao', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <Realizacao /> )))).toMatchSnapshot();
  })
})
