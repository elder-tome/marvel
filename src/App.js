import React from 'react';
import {  YellowBox, StatusBar } from 'react-native';
import Routes from './routes'

StatusBar.setBackgroundColor('#e51024')

YellowBox.ignoreWarnings([
    'ViewPagerAndroid'
])

export default function App(){
    return(
        <Routes />
    )
}
