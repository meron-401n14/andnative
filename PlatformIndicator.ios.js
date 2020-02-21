import React from 'react';
import { View, Text } from 'react-native';

/**
 
 * @param {object} props 
 * @return status running on IOS 
 */

function PlatformIndicator(props) {
    return <Text>You're running on iOS</Text>;
}

export default PlatformIndicator;