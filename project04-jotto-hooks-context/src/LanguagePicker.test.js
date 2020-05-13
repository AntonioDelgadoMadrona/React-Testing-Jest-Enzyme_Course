import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';
import LanguagePicker from './LanguagePicker';

const mockSetLanguage = jest.fn();

const setup = () => {
    return shallow(<LanguagePicker setLanguage={mockSetLanguage} />)
};

test('should render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-language-picker');
    expect(component.exists()).toBe(true);
});

test('should does not trow warning with expected props', () => {
    checkProps(LanguagePicker, { setLanguage: jest.fn() });
});

test('should render non-zero language icons', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'language-icon');
    expect(component.length).toBeGreaterThan(0);
});


test('should call setLanguage prop upon a click', () => {
    const wrapper = setup();
    const languageIcons = findByTestAttr(wrapper, 'language-icon');

    const firstIcon = languageIcons.first();
    firstIcon.simulate('click');

    expect(mockSetLanguage).toHaveBeenCalled();
});


