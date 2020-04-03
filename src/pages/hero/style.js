import { Dimensions, StyleSheet } from 'react-native'

const screenWidth = Dimensions.get('screen').width

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: '#101010'
    },
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image:{
        width: screenWidth,
        height: screenWidth
    },
    description:{
        padding: 20,
        fontSize:14,
        textAlign: "justify",
        color: '#fff'
    },
    button:{
        padding: 10,
        width: '90%',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#e51024',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    text:{
        color: '#e51024',
        fontWeight: 'bold'
    }
})

export default styles