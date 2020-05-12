import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

import hookActions from './actions/hookActions';

const mockgetSecretWord = jest.fn();

/**
 * Setup functions app component
 * @param {string} secretWord
 * @return {ReactWrapper}
 */
const setup = (secretWord = 'party') => {

  mockgetSecretWord.mockClear();
  hookActions.getscretWord = mockgetSecretWord;

  const mockUseReducer = jest.fn()
    .mockReturnValue([
      { secretWord },
      jest.fn()
    ]);

  React.useReducer = mockUseReducer;
  // use mount, because useEffect not called on `shallow`
  return mount(<App />)
}

test('renders learn react link', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});

describe('getSecretWord calls', () => {

  test('getSecretWord gets called on App mount', () => {

    setup();

    // check to see if the secret word was updated
    expect(mockgetSecretWord).toHaveBeenCalled();
  });

  test('secretWord does not update on App update', () => {
    const wrapper = setup();
    mockgetSecretWord.mockClear();

    wrapper.setProps();

    expect(mockgetSecretWord).not.toHaveBeenCalled();
  })
});

describe('secretWord is not null', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup('party');
  });

  test('renders app when secretWord is not null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(true);
  });

  test('does not render spinner when secretWord is not null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(false);
  });

});

describe('secretWord is null', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = setup(null);
  });

  test('renders spinner when secretWord is null', () => {
    const spinnerComponent = findByTestAttr(wrapper, 'spinner');
    expect(spinnerComponent.exists()).toBe(true);
  });

  test('does not render app component when secretWord is null', () => {
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent.exists()).toBe(false);
  });

});

