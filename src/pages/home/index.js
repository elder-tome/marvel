import React, { useState } from 'react';
import { Text, View, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Searchbar } from 'react-native-paper'
import md5 from 'js-md5'

import styles from './style'
import authentication from '../../config'
import api from '../../services/api'

export default function home({ navigation }){

    const [ listData, setListData ] = useState([])
    
    const [ search, setSearch ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const hash = md5(`${authentication.timestamp}${authentication.private_key}${authentication.public_key}`)

    async function handleSearch(){
        if(search != ''){
            setListData([])
            setLoading(true)
            const response = await api.get(
                `/characters?nameStartsWith=${search}&limit=${100}&ts=${authentication.timestamp}&apikey=${authentication.public_key}&hash=${hash}`
            )
            const { results, total } = response.data.data
            if(total == 0){
                setLoading(false)
                alert('not found!')
            }
            else{
                setListData(results)
                setLoading(false)
            }
        }
        else{
            setListData([])
            setLoading(false)
        }
    }

    function handleClick(data){
        navigation.navigate('hero', { data })
    }

    return(
        <View style={styles.container}>
            <Searchbar
                style={styles.search}
                value={search}
                onChangeText={setSearch}
                onSubmitEditing={handleSearch}
                placeholder='Search for a hero'
                placeholderTextColor='#c6c6c6'
                iconColor='#101010'
                inputStyle={ { color: '#101010', } }
            />
            <FlatList
                data={listData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleClick(item)} style={styles.button}>
                        <Image style={styles.image} source={{ uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                        <Text style={styles.text}>{item.name}</Text>
                    </TouchableOpacity>
                )}
                style={styles.list}
            />
            { loading &&
                <View style={styles.containerLoading}>
                    <ActivityIndicator  size="large" color="#e51024" />
                </View>
            }
        </View>
    )
}