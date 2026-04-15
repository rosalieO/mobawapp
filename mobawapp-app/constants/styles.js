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
        backgroundColor: '#fff',
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
        color: '#1a1a1a',
        marginBottom: 8,
    },
    subheadline: {
        fontSize: 16,
        fontFamily: 'System',
        color: '#1a1a1a',
        lineHeight: 22,
        marginBottom: 20,
    },
    anomalyname: {
        fontSize: 16,
        fontFamily: 'System',
        color: '#1a1a1a',
        fontWeight: '600',
    },
    caption: {
        fontSize: 8,
        fontFamily: 'System',
        color: '#1a1a1a',
        fontWeight: '400',
        textTransform: 'uppercase'
    },
    error: {
        color: '#f366',
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'mono'
    },
});