import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import home from './pages/home'
import hero from './pages/hero'
import web from './pages/webPage'

import image from './assets/MarvelLogo.png'

export default createAppContainer(
    createStackNavigator({
        home,
        hero,
        web
    }, { defaultNavigationOptions: {
            headerTitle: <Image source={image} style={ { marginHorizontal:13 } }/>,
            headerTintColor: '#fff',
            headerStyle:{
                backgroundColor: '#e51024',
                elevation: 0
            },
            headerTitleStyle:{
                fontWeight: 'bold'
            }
        }
    })
)