import { themes } from "@/global/themes";
import React, { forwardRef } from "react";
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import styles from "./styles";


type Props = TouchableOpacityProps & {
    title: string;
    loading?: boolean;
};

const Button = forwardRef((props: Props, ref?) => {
    const { title, loading, ...rest } = props;

    return (
        <>
            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.6}
                disabled={loading}
                {...rest}>
                {
                    loading
                        ? <ActivityIndicator size={30} color={themes.colos.secondary} />
                        : <Text style={styles.buttonTitle}>Login</Text>
                }

            </TouchableOpacity>


        </>
    );
});

export default Button;