import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { AuthContext } from "@/app/contexts/auth";
import { themes } from "@/global/themes";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useContext, useState } from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";


const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    const { signIn } = useContext(AuthContext);


    const getLogin = async () => {
        try {
            setLoading(true);
            await signIn(email, password);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);

        }

    };

    return (
        <View style={styles.container}>

            <View style={styles.boxLogo}>
                <Text style={styles.title}>
                    Shop
                </Text>
            </View>
            <View style={styles.boxMid}>
                <Input
                    title="Email"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                    autoComplete="email"
                    keyboardType="email-address"
                    inputMode="email"
                    value={email}
                    onChangeText={setEmail}
                    readOnly={loading}

                />
                <Input
                    title="Password"
                    IconRight={MaterialCommunityIcons}
                    iconRightName={secureTextEntry ? "eye" : "eye-off"}
                    iconLeftName={secureTextEntry ? "eye" : "eye-off"}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    autoComplete="password"
                    onPressIconRight={() => setSecureTextEntry(!secureTextEntry)}
                    value={password}
                    onChangeText={setPassword}
                    readOnly={loading}
                />
            </View>
            <View style={styles.boxButton}>
                <Button title="Login" loading={loading} onPress={getLogin} />
                <Text style={styles.textButton}>Don't have an account?<Text style={{ color: themes.colos.primary }} onPress={() => { }}> Create now.</Text></Text>
            </View>
        </View>
    );
}

export default Login;