import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import firebase from 'firebase/app';

import MainMenu from './MainMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

describe('MainMenu', () => {
  it('should match a snapshot with no currentUser', () => {
    const history = { push: jest.fn() };
    firebase.auth = jest.fn().mockReturnValue({ currentUser: false });
    expect(toJson(shallow(( <MainMenu.WrappedComponent history={history} /> )))).toMatchSnapshot();
  })

  it('should match a snapshot with currentUser', () => {
    const history = { push: jest.fn() };
    firebase.auth = jest.fn().mockReturnValue({ currentUser: true });
    expect(toJson(shallow(( <MainMenu.WrappedComponent history={history} /> )))).toMatchSnapshot();
  })

  it('should toggle main menu when clicked in HamburgerMenu', () => {
    const history = { push: jest.fn() };
    firebase.auth = jest.fn().mockReturnValue({ currentUser: true });
    const Component = shallow(( <MainMenu.WrappedComponent history={history} /> ));

    expect(Component.state().isOpen).toBeFalsy();
    Component.find(HamburgerMenu).simulate('click');
    expect(Component.state().isOpen).toBeTruthy();
  })

  it('should handle logout correclty', () => {
    const history = { push: jest.fn() };
    firebase.auth = jest.fn().mockReturnValue({ currentUser: true, signOut: jest.fn() });
    const Component = shallow(( <MainMenu.WrappedComponent history={history} /> ));

    Component.find('button').simulate('click');
    expect(history.push).toHaveBeenCalledWith('/app');
  })
})