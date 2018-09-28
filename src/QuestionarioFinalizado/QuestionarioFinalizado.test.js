import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import QuestionarioFinalizado from './QuestionarioFinalizado';

describe('QuestionarioFinalizado', () => {
  it('should match a snapshot', () => {
    expect(toJson(shallow(( <QuestionarioFinalizado /> )))).toMatchSnapshot();
  })
})
