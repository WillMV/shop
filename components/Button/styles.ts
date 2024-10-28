import { themes } from '@/global/themes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 50,
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: themes.colos.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },

    buttonTitle: {
        fontWeight: "bold",
        color: themes.colos.secondary,
        fontSize: 15,

    }
});

export default styles;