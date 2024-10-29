import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AuthProvider from "./app/contexts/auth";
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

        <SafeAreaProvider>
            <NavigationContainer>
                <AuthProvider>
                    <Router />
                </AuthProvider>
            </NavigationContainer>
        </SafeAreaProvider>

    )
}

export default App;