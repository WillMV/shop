import { ProductItem } from "@/app/components/ProductItem";
import { ProductList } from "@/app/components/ProductList";
import Product from "@/app/models/product";
import { categories } from "@/mock/categories";
import products from "@/mock/products";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList } from "react-native";


const Home = () => {
    const [items, setItems] = useState<Array<Product>>([]);
    const [loading, setLoading] = useState<boolean>(false)


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
        <>
            {
                loading
                    ? <ActivityIndicator size={50} style={{ justifyContent: "center", height: "100%" }} />
                    : <FlatList data={categories} renderItem={
                        (category) => {
                            const data = products.filter((prod) => prod.category.id === category.item.id);

                            if (data.length < 1) return null;

                            return <ProductList
                                key={category.item.id}
                                title={category.item.name}
                                data={data.map((prod) => new Product(prod.title, prod.images[0], prod.id, prod.price, prod.category.id))}
                                renderItem={(element) => <ProductItem product={element.item} />}
                            />
                        }
                    } />


            }
        </>

    )
};

export default Home;
