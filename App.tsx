import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./app/contexts/auth";
import SafeAreaPaddingsProvider from "./app/contexts/safeAreaPaddings";
import { Router } from "./app/routes/index.routes";


const App = () => {

    // const Main = () => {
    //     const insets = useSafeAreaInsets();
    //     return (
    //         <View style={{
    //             paddingTop: insets.top,
    //             paddingBottom: insets.bottom,
    //             paddingLeft: insets.left,
    //             paddingRight: insets.right,
    //         }}>

    //         </View>
    //     );
    // }


    return (

        <NavigationContainer>
            <SafeAreaProvider>
                <SafeAreaPaddingsProvider>
                    <AuthProvider>
                        <Router />
                    </AuthProvider>
                </SafeAreaPaddingsProvider>
            </SafeAreaProvider>
        </NavigationContainer >

    )
}

export default App;