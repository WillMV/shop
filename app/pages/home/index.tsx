import { ProductItem } from "@/app/components/ProductItem";
import { ProductList } from "@/app/components/ProductList";
import { SafeAreaPaddingsContext } from "@/app/contexts/safeAreaPaddings";
import Product from "@/app/models/product";
import { categories } from "@/mock/categories";
import products from "@/mock/products";
import { useContext, useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";


const Home = () => {
    const [items, setItems] = useState<Array<Product>>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const { safePaddings } = useContext(SafeAreaPaddingsContext);

    const getItems = async () => {
        await new Promise((resolve, _) => {
            setTimeout(() => {
                setItems(products.map(item => new Product(item.title, item.images[0], item.id, item.price, item.category.id)));
                resolve('OK');
            }, 3000);

        })
    }



    useEffect(() => {
        setLoading(true);
        getItems().then((_) => { setLoading(false); })
    }, [])


    return (

        <View style={safePaddings}>
            {
                loading
                    ? <ActivityIndicator
                        style={{ justifyContent: "center", height: "100%" }}
                        size={50}
                    />
                    : <FlatList
                        data={categories}
                        renderItem={(category) => {
                            const data = items.filter((item) => item.categoryId === category.item.id);

                            if (data.length < 1) return null;

                            return <ProductList
                                key={category.item.id}
                                title={category.item.name}
                                data={data}
                                showsHorizontalScrollIndicator={false}
                                renderItem={(element) => <ProductItem product={element.item} />}
                            />
                        }
                        }
                    />
            }
        </View >

    )
};

export default Home;
