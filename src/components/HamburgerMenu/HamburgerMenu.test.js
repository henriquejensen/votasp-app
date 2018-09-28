import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import HamburgerMenu from './HamburgerMenu';

describe('HamburgerMenu', () => {
  it('should match a snapshot', () => {
    const onClick = jest.fn();
    const Component = shallow(( <HamburgerMenu onClick={onClick} /> ));
    expect(toJson(Component)).toMatchSnapshot();
    Component.props().onClick();
    expect(onClick).toHaveBeenCalled();
  })
})
