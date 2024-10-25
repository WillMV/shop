import { SafeAreaView } from "react-native";
import Login from "./app/pages/login";
import { styles } from "./app/pages/styles";

const App = () => {
    return (
        <SafeAreaView style={styles.main}>
            <Login />
        </SafeAreaView>
    )
}

export default App;