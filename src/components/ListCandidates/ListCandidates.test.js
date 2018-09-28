import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import firebase from 'firebase/app';

import ListCandidates from './ListCandidates';

describe('ListCandidates', () => {
  it('should match a snapshot', () => {
    const get = () => Promise.resolve();
    const where = jest.fn().mockReturnValue({ get });
    const collection = jest.fn().mockReturnValue({ where });
    firebase.firestore = jest.fn().mockReturnValue({ collection });
    const Component = shallow(( <ListCandidates /> ))
    expect(toJson(Component)).toMatchSnapshot();

    Component.setState({ loading: false });
    expect(toJson(Component)).toMatchSnapshot();
  })
})