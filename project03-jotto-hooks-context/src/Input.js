import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {

    const { secretWord } = props;
    
    return (
        <div data-test="component-input">
            
        </div>
    )
};

Input.proTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input;
