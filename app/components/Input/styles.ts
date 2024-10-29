import { themes } from "@/global/themes";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    boxInput: {
        alignItems: "center",
        flexDirection: "row",
        marginTop: 5,
        marginBottom: 15,
        borderWidth: 1,
        backgroundColor: themes.colos.white,
        borderRadius: 5,
        maxWidth: 400,

    },

    input: {
        height: 40,
        width: "90%",
        maxWidth: 400,
        padding: 10,
    },

    inputTitle: {
        fontWeight: "bold",
    },

    icon: {
        paddingHorizontal: 2,
        color: themes.colos.primary,
    },


});
