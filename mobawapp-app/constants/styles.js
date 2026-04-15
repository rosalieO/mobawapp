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
    touchable: {
        padding: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 8,
        marginBottom: 10,
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
        color: 'pink',
        marginTop: 8,
        textTransform: 'uppercase',
    },
    anomalyname: {
        fontSize: 16,
        fontFamily: 'System',
        color: '#cacaca',
        fontWeight: '600',
    },
    caption: {
        fontSize: 8,
        fontFamily: 'System',
        color: '#cacaca',
        fontWeight: '400',
        textTransform: 'uppercase'
    },
    text: {
        fontSize: 12,
        fontFamily: 'System',
        color: '#cacaca',
        fontWeight: '400',
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
    }
});