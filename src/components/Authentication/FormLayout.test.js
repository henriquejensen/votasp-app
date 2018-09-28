import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import FormLayout from './FormLayout';

describe('FormLayout', () => {
  const children = (
    <form>
      <div className="field-wrapper">
        <label htmlFor="password">Senha</label>
        <input type="password" className="input" name="password" id="password" required />
      </div>
      <button className="authentication__submit-button">Entrar</button>
    </form>
  )

  it('should match a snapshot', () => {
    const props = {
      showLoginPage: jest.fn(),
      activeTab: 'signin',
      errorMessage : '',
      hideTabs: true,
      successMessage: '',
      children
    }
    const formLayout = shallow(( <FormLayout {...props} /> ))      
    expect(toJson(formLayout)).toMatchSnapshot();
  })

  it('should show successMessage', () => {
    const props = {
      showLoginPage: jest.fn(),
      activeTab: 'signin',
      errorMessage : '',
      hideTabs: true,
      successMessage: 'Success message'
    }
    const formLayout = shallow(( <FormLayout {...props} /> ))        
    expect(toJson(formLayout)).toMatchSnapshot();
  })

  it('should show errorMessage', () => {
    const props = {
      showLoginPage: jest.fn(),
      activeTab: 'signin',
      errorMessage : 'Error message',
      hideTabs: true,
      successMessage: ''
    }
    const formLayout = shallow(( <FormLayout {...props} /> ))        
    expect(toJson(formLayout)).toMatchSnapshot();
  })

  it('should call showLoginPage with true as argument', () => {
    const props = {
      showLoginPage: jest.fn(),
      activeTab: 'signup',
      errorMessage : '',
      hideTabs: false,
      successMessage: ''
    }
    const formLayout = shallow(( <FormLayout {...props} /> ));
    formLayout.find('button').first().simulate('click');
    expect(props.showLoginPage).toHaveBeenCalledWith(true);
  })

  it('should call showLoginPage with false as argument', () => {
    const props = {
      showLoginPage: jest.fn(),
      activeTab: 'signup',
      errorMessage : '',
      hideTabs: false,
      successMessage: ''
    }
    const formLayout = shallow(( <FormLayout {...props} /> ));
    formLayout.find('button').last().simulate('click');
    expect(props.showLoginPage).toHaveBeenCalledWith(false);
  })
})
