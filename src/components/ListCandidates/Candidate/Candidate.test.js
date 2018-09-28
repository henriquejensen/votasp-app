import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Candidate from './Candidate';

describe('Candidate', () => {
  it('should match a snapshot', () => {
    const name = 'Candidate Name';
    const number = 1234;
    const politicalParty = 'PARTY';
    const picture = 'http://via.placeholder.com/150x150?text=TEST';
    const status = "Cadastro Finalizado";
    expect(
      toJson(
        shallow(( 
          <Candidate
            name={name}
            number={number}
            politicalParty={politicalParty}
            picture={picture}
            status={status}
          /> 
        ))
      )
    ).toMatchSnapshot();
  })

  it('should render correctly with no picture passed', () => {
    const name = 'Candidate Name';
    const number = 1234;
    const politicalParty = 'PARTY';
    const status = "Cadastro Finalizado";
    expect(
      toJson(
        shallow(( 
          <Candidate
            name={name}
            number={number}
            politicalParty={politicalParty}
            status={status}
          /> 
        ))
      )
    ).toMatchSnapshot();
  })

  it('should render correctly with no picture passed', () => {
    const name = 'Candidate Name';
    const number = 1234;
    const politicalParty = 'PARTY';
    const status = "Cadastro em andamento";
    expect(
      toJson(
        shallow(( 
          <Candidate
            name={name}
            number={number}
            politicalParty={politicalParty}
            status={status}
          /> 
        ))
      )
    ).toMatchSnapshot();
  })
})
