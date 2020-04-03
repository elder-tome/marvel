import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    list:{
        backgroundColor: '#101010'
    },
    container:{
        flex: 1,
    },
    search:{
        backgroundColor: '#fff',
        padding: 2,
        borderRadius: 0,
        elevation: 0
    },
    button:{
        flexDirection: 'row', 
        padding: 10, 
        alignItems: 'center',
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    },
    text:{
        color: '#fff',
        marginLeft: 15
    },
    containerLoading:{
        flex: 1,
        padding: 40,
        backgroundColor: '#101010',
    }
})

export default styles