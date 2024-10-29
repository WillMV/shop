import { themes } from "@/global/themes";
import { forwardRef } from "react";
import { FlatList, FlatListProps, ListRenderItem, Text, View } from "react-native";
import { styles } from "./style";

type Props = FlatListProps<any> & {
    title: string;
    data: any[];
    renderItem: ListRenderItem<any>;
};


export const ProductList = forwardRef((props: Props, ref?) => {
    const { title, data, renderItem, ...rest } = props;
    return (
        <>
            <View style={styles.headerBox}>
                <Text style={styles.titleList}>{title}</Text>
                <Text style={{ color: themes.colos.primary }} onPress={() => { }} >See more</Text>

            </View>
            <FlatList data={data} renderItem={renderItem} horizontal={true} {...rest} />
        </>
    );
})