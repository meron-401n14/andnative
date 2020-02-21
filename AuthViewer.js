import React from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';

/**
 * @function AuthViewer helps to move from one effect to other
 * show/hide, 
 * @param {object} props 
 * export component based of state props token or auth 
 */

function AuthViewer(props) {
    let show = props.token !== '';
    if (props.reverse) show = !show;

    if (show) return <View>{props.children}</View>;
    else return <View></View>;
}

const mSTP = state => ({
    token: state.auth.token,
});

export default connect(mSTP)(AuthViewer);