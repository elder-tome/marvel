import React from 'react'
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native'

import styles from './style'

export default function hero({ navigation }) {

    const data = navigation.getParam('data')

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={{ uri: `${data.thumbnail.path}.${data.thumbnail.extension}` }}
                    />
                    <Text style={styles.description}>{data.description}</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('web', { data })} style={styles.button}>
                        <Text style={styles.text}>ACCESS</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    )

}

hero.navigationOptions = ({ navigation }) => ({
    headerTitle: navigation.getParam('data').name
})