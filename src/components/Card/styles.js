import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232C34',
        flexDirection: 'column',
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#323C47',
        marginTop: 10,
        borderWidth: 0,
        borderRadius: 13,
        height: 110
    },
    text: {
        alignSelf: 'flex-start',
        marginLeft: 30,
        color: '#FEFFFF',
        marginBottom: 5,
        fontSize: 20,
        fontFamily: 'Montserrat-SemiBold',
    },
    insideContainer: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginLeft: 10
    },
    infoText: {
        color: '#FEFFFF',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 9,
    },
    default: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 13,
        borderRadius: 25,
    },
    buttonText: {
        color: '#FEFFFF',
        fontFamily: 'Montserrat',
        fontSize: 8,
    },
});
