import { SafeAreaView } from 'react-native'
import {useIsFocused} from '@react-navigation/core';
import React from 'react'
import { StatusBar } from 'react-native-web';

const FocusedStatusBar = (props) => {
    const isFocused = useIsFocused();
    return isFocused = <StatusBar animated={true} {...props} /> ; null;
}

export default FocusedStatusBar