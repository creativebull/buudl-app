import { View, TouchableOpacity, Image, Text } from "react-native";
import React from "react";
import globalStyles from "../../constants/global.styles";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

const CartList = (item) => {
    const navigation = useNavigation();
    const hostUrl = process.env.HOST_URL
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ProductDetails", {item})}>
            <View style={globalStyles.cartList}>
                <View style={globalStyles.cartListImageWrapper}>
                    <Image
                        source={{ uri: hostUrl + item.image_url }}
                        style={globalStyles.cartListImage}
                    />
                </View>
                <View>
                    <Text>{item.product_name}</Text>
                </View>
                <View>
                    <Text>Test2</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CartList