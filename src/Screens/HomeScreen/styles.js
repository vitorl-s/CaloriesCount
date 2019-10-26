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
        borderRadius: 12,
    },
    circleImage: {
        resizeMode: 'contain',
        height: 35,
        width: 35,
        marginBottom: 5
    },
    circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        width: 60
    },
    linearGradientContainer: {
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        color: '#FEFFFF',
        fontSize: 24,
        fontFamily: 'Montserrat'
    }
});
