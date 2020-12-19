import { shallow } from 'enzyme';
import React from 'react';
import Responsive from '../Responsive';

describe('Responsive changes the text after click', () => {
    it('rendered without Crash', () => {
        const wrapper = shallow(<Responsive />);
        expect(wrapper).toMatchSnapshot();
    });
});
