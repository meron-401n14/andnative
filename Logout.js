import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native';

/**
 * @function component exports Logout 
 * @param {object} props from Logout
 * dispatch logout action 
 * connect Logout to store 
 */

function Logout(props) {
    return (
        <Button
            title='Logout'
            onPress={() => {
                props.dispatch({ type: 'LOGOUT' });
            }}
        />
    );
}

export default connect()(Logout);