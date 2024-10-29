import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";
import Category from "../pages/category";
import Details from "../pages/details";
import Home from "../pages/home";
import Login from "../pages/login";

export const Router = () => {
    const { isSignedIn } = useContext(AuthContext);

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator

        >
            {
                isSignedIn
                    ?
                    <>
                        <Stack.Screen
                            name="Home"
                            component={Home}
                            options={{ headerShown: false }}

                        />
                        <Stack.Screen
                            name="Category"
                            component={Category}
                        />
                        <Stack.Screen
                            name="Details"
                            component={Details}
                            initialParams={{ title: "Product" }}
                            options={{ headerShown: false }}

                        />
                    </>
                    :
                    <>
                        <Stack.Screen
                            name="Login"
                            component={Login}
                            options={{ headerShown: false }}


                        />
                    </>
            }

        </Stack.Navigator>
    );
}

