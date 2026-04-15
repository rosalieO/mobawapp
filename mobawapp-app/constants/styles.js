import { StyleSheet } from 'react-native';

export const Colors = {
  active: 'black',
  inactive: 'grey',
  activeBackground: 'pink',
  inactiveBackground: 'black',
};

export const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding: 20,
    },
    inputcontainer: {
        width: '100%',
        marginBottom: 20
    },
    anomalycontainer: {
        width: '100%',
        maxheight: 200,
        marginBottom: 20,
        borderRadius: 8,
        backgroundColor: '#333333',
        borderWidth: 1,
        borderColor: '#444444',
    },
    textcontainer: {
        padding: 10,
    },
    touchable: {
        padding: 15,
        backgroundColor: 'pink',
        borderRadius: 8,
        marginBottom: 10,
        textAlign: 'center',
    },
    headline: {
        fontSize: 24,
        fontFamily: 'System',
        fontWeight: 'bold',
        color: '#cacaca',
        marginBottom: 8,
    },
    subheadline: {
        fontSize: 12,
        fontFamily: 'System',
        color: '#cacaca',
        textTransform: 'uppercase',
    },
    anomalyname: {
        fontSize: 16,
        fontFamily: 'System',
        color: '#cacaca',
        fontWeight: '600',
    },
    caption: {
        fontSize: 12,
        fontFamily: 'System',
        color: 'pink',
        fontWeight: '400',
        textTransform: 'uppercase',
        marginTop: 8,
    },
    text: {
        fontSize: 12,
        fontFamily: 'System',
        color: '#cacaca',
        fontWeight: '400',
    },
    textInput: {
        fontSize: 12,
        fontFamily: 'System',
        color: '#cacaca',
        backgroundColor: '#333333', 
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#444444',
        marginTop: 10,
    },
    fadedtext: {
        fontSize: 12,
        fontFamily: 'System',
        color: '#8d8d8d',
        fontWeight: '400',
    },
    touchabletext: {
        fontSize: 16,
        fontFamily: 'System',
        color: 'black',
        fontWeight: 800,
    },
    error: {
        color: '#f366',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'mono'
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 5,
        overflow: 'hidden'
    },
    coverimage: {
        width: '100%',
        height: 200,
        overflow: 'hidden'
    }
});