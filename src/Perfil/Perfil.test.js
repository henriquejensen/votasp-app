import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import firebase from 'firebase/app';

import Perfil from './Perfil';

describe('Perfil', () => {
  it('should match a snapshot', () => {
    const history = { push: jest.fn() }
    const userData = { city: 'Campinas', name: 'Vota SP' };
    firebase.auth = jest.fn().mockReturnValue({ onAuthStateChanged: jest.fn() });
    expect(toJson(shallow(( <Perfil history={history} userData={userData} /> )))).toMatchSnapshot();
  })
})