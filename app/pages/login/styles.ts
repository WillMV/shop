import { themes } from "@/global/themes";
import { } from "expo-font";
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

    container: {
        height: "100%",
    },

    boxLogo: {
        alignItems: "center",
        justifyContent: "center",
        height: "20%",
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
        width: "100%",
        maxHeight: "30%",
        paddingHorizontal: "20%",
    },

    boxButton: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: "20%",
        width: "100%",
        height: "50%",
    },

    textButton: {

    },

});