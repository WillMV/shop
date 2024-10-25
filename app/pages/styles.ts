import { themes } from "@/global/themes";
import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: themes.colos.secondary,
    },

    container: {
        height: "100%",
    },

    boxTop: {
        alignItems: "center",
        justifyContent: "center",
        height: "30%",
        width: "100%",
    },

    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: themes.colos.primary,
    },

    inputTitle: {
        paddingTop: 10,
    },

    boxMid: {
        height: "30%",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },

    boxBottom: {
        paddingLeft: 40,
        paddingRight: 40,
        width: "100%",
        height: "30%",
    },

    input: {
        height: 40,
        width: "80%",
        borderWidth: 1,
        padding: 10,
    },
});