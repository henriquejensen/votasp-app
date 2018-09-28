import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ProgressBar from './ProgressBar';

describe('ProgressBar', () => {
  it('should renders correctly when values is undefined', () => {
    expect(toJson(shallow(( <ProgressBar /> )))).toMatchSnapshot();
  })

  it('should renders correctly when values exists and IS sorted', () => {
    const values = [
      { color: 'green', value: 100 },
      { color: 'yellow', value: 50 },
      { color: 'red', value: 0 }
    ];
    expect(toJson(shallow(( <ProgressBar values={values} /> )))).toMatchSnapshot();
  })

  it('should renders correctly when values exists and IS NOT sorted', () => {
    const values = [
      { color: 'red', value: 0 },
      { color: 'yellow', value: 50 },
      { color: 'green', value: 100 }      
    ];
    expect(toJson(shallow(( <ProgressBar values={values} /> )))).toMatchSnapshot();
  })
})
