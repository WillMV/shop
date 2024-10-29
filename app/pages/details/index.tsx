import Product from "@/app/models/product";
import { RootParamList } from "@/app/types";
import products from "@/mock/products";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Details = () => {
    const [item, setItem] = useState<Product | null>(null);

    const route = useRoute<RouteProp<RootParamList, 'Details'>>();

    const { itemId } = route.params;


    const getItem = async () => {
        new Promise((resolve, reject) => {
            setTimeout(() => {
                const prodItem = products.find((p) => p.id === itemId)
                if (prodItem) {
                    setItem(new Product(prodItem.title, prodItem.images[0], prodItem.id, prodItem.price, prodItem.category.id));
                    resolve("OK");
                }
                reject("NOT_FOUND");
            }, 3000)
        })
    }


    useEffect(() => { getItem() }, [])

    return (
        <View>
            {item ?
                <Text>
                    ItemDetail {itemId}
                </Text> :
                <ActivityIndicator />
            }
        </View>
    )
}

export default Details;