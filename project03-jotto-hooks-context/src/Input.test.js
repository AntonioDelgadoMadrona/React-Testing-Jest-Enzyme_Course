import React from 'react';

import { shallow } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import Input from './Input';

test('should render without errors', () => {
    const wrapper = shallow(<Input />);
    const component = findByTestAttr(wrapper, 'component-input');
    expect(component).toBeTruthy();
})