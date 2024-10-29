import Product from "@/app/models/product";
import { RootParamList } from "@/app/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { forwardRef } from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    product: Product
};

export const ProductItem = forwardRef((props: Props, ref?) => {
    const { product } = props;

    const navigator = useNavigation<NavigationProp<RootParamList>>();

    return (
        <TouchableOpacity style={styles.container} onPress={() => { navigator.navigate("Details", { itemId: product.id, title: product.title }) }}>
            <Image style={styles.productImage} source={{ uri: product.imageUrl }} />
        </TouchableOpacity>
    );
});