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
});

describe('state controlled input field', () => {

    let mockSetCurrentGuess;
    let wrapper;

    beforeEach(() => {
        mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup();
    })

    test('should state updated with value of input box upon change', () => {
        const inputBox = findByTestAttr(wrapper, 'input-box');

        const mockEvent = { target: { value: 'train' } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    });

    test('should field is cleared upon submit button clicked', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button');

        submitButton.simulate("click");

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    });

});