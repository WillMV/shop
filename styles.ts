import { Platform, StatusBar, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    main: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        // backgroundColor: themes.colos.secondary,
        // height: "100%",
        // width: "100%",


    },
});