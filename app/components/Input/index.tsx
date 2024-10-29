import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import React, { forwardRef } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof MaterialCommunityIcons>>;


type Props = TextInputProps & {
    IconRight?: IconComponent,
    IconLeft?: IconComponent,
    iconRightName?: string,
    iconLeftName?: string,
    title?: string,
    onPressIconRight?: () => void,
    onPressIconLeft?: () => void,

};



const Input = forwardRef((props: Props, ref?) => {
    const { IconRight, IconLeft, iconLeftName, iconRightName, onPressIconLeft, onPressIconRight, title, ...rest } = props;

    const calculateInputWidth = () => {
        if (IconRight && IconLeft) {
            return "80%"
        } else if (IconRight || IconLeft) {
            return "90%"
        } else {
            return "100%"
        }
    }

    return (
        <>
            {title && <Text style={styles.inputTitle}>{title}</Text>}
            <View style={styles.boxInput}>
                {IconLeft && iconLeftName
                    && (
                        <TouchableOpacity disabled={onPressIconLeft === undefined} onPress={onPressIconLeft}>
                            <IconLeft name={iconLeftName as any} size={20} style={styles.icon} />
                        </TouchableOpacity>
                    )}
                <TextInput
                    {...rest}
                    style={[styles.input, { width: calculateInputWidth() },]}
                />
                {IconRight && iconRightName
                    && (
                        <TouchableOpacity disabled={onPressIconRight === undefined} onPress={onPressIconRight}>
                            <IconRight name={iconRightName as any} size={20} style={styles.icon} />
                        </TouchableOpacity>
                    )}
            </View>
        </>
    )
})

export default Input;