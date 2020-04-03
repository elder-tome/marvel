import React from 'react'
import { View } from 'react-native'
import { WebView } from 'react-native-webview'
import Lottie from 'lottie-react-native'

import deadpool from '../../assets/deadpool.json'
// import styles from './style'

export default function web({ navigation }) {

    const data = navigation.getParam('data')

    function renderLoadingView() {
        return (
            <View style={ { alignItems: 'center' } }>
                <Lottie source={deadpool} style={{ width: 500, height: 500 }} autoPlay loop />
            </View>
        );
    }

    return (
        <WebView
            source={{ uri: data.urls[1].url }}
            renderLoading={renderLoadingView} startInLoadingState={true}
        />
    )

}

web.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('data').name
})

