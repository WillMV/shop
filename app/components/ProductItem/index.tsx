import Product from "@/app/models/product";
import { forwardRef } from "react";
import { Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
    product: Product
};

export const ProductItem = forwardRef((props: Props, ref?) => {
    const { product } = props;
    return (
        <TouchableOpacity style={styles.container} onPress={() => { }}>
            <Image style={styles.productImage} source={{ uri: product.imageUrl }} />
        </TouchableOpacity>
    );
});