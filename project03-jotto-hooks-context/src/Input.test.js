import React from 'react';

import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';

import Input from './Input';

/**
 * Setup function for input component 
 * @returns {ShallowWrapper}
 */
const setup = (secretword = 'party') => {
    return shallow(<Input secretword={secretword} />)
}

test('should render without errors', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component).toBeTruthy();
})

test('should not throw warning with expected props', () => {
    checkProps(Input, { secretword: 'party' });
})