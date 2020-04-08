import React from 'react';
import {  YellowBox, StatusBar } from 'react-native';
import Routes from './routes'

StatusBar.setBackgroundColor('#AA0C1B')

YellowBox.ignoreWarnings([
    'ViewPagerAndroid'
])

export default function App(){
    return(
        <Routes />
    )
}
