import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import CircleButton from './CircleButton';

describe('CircleButton', () => {
  it('should match a snapshot', () => {
    const onClick = jest.fn();
    const content = 'Hello World';
    const Component = shallow(( <CircleButton onClick={onClick} content={content} /> ));
    expect(toJson(Component)).toMatchSnapshot();
    Component.props().onClick();
    expect(onClick).toHaveBeenCalled();
  })

  it('should render correctly wehn onClick is not passed', () => {
    const onClick = jest.fn();
    const content = 'Hello World';
    const Component = shallow(( <CircleButton content={content} /> ));
    expect(toJson(Component)).toMatchSnapshot();
    Component.props().onClick();
    expect(onClick).not.toHaveBeenCalled();
  })
})
