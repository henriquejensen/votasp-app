import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Gabriel from '../../img/realizacao/GRibeiro.png';

import Picture from './Picture';

describe('Picture', () => {
  it('should match a snapshot', () => {
    const person = { name: 'Gabriel Ribeiro', picture: Gabriel, role: 'Developer', altPicture: 'Foto da realizadora' }
    expect(toJson(shallow(
      ( <Picture
          name={person.name}
          picture={person.picture}
          role={person.role}
        /> 
      )
    ))).toMatchSnapshot();
  })
})
