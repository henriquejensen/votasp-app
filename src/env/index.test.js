import React from 'react';
import { shallow } from 'enzyme';
import dev from './dev';
import prod from './prod';

describe('LandingPage', () => {
  beforeEach(() => {
      jest.resetModules();
  });

  it('should return dev when process.env.NODE_ENV IS NOT dev', () => {
    const env = require('./').default;
    expect(env).toEqual(prod);
  })

  it('should return dev when process.env.NODE_ENV IS dev', () => {
    process.env.NODE_ENV = 'dev';
    const env = require('./').default;
    expect(env).toEqual(dev);
  })
})
