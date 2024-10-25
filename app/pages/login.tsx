import { Button, Text, TextInput, View } from "react-native";
import { styles } from "./styles";


const Login = () => {
    return (
        <View style={styles.container}>

            <View style={styles.boxTop}>
                <Text style={styles.title}>
                    Shop
                </Text>
            </View>
            <View style={styles.boxMid}>

                <Text style={styles.inputTitle}>nickname</Text>
                <TextInput
                    placeholder="nickname"
                    style={styles.input}
                />

                <Text style={styles.inputTitle}>password</Text>
                <TextInput
                    placeholder="********"
                    textContentType="password"
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <View style={styles.boxBottom}>

                <Button

                    title="Login"
                    onPress={() => { }}
                />

            </View>

        </View>
    );
}

export default Login;