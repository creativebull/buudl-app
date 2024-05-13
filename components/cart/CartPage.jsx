import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import globalStyles from "../../constants/global.styles";
import { COLORS, SIZES } from "../../constants/index";
import { useNavigation } from "@react-navigation/native";
import CartList from "./CartList";
import getCartItems from "../../hook/getCartItems";
import Header from "../header/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartPage = ({ item }) => {
  const navigation = useNavigation();
  const { data, isLoading, error } = getCartItems();
  console.log("data from cart Page is ===>", data);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [edited, setEdited] = useState(false);

  const toggleSelectedItem = (itemId) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId);
      } else {
        newSelectedItems.add(itemId);
      }
      return newSelectedItems;
    });
  };
  console.log(typeof(selectedItems))
  const onEditPress = ()=>{
    if(selectedItems.size==2){
      const firstSelectedItem = Array.from(selectedItems)[0];
      // navigation.navigate("c")
      console.log("first item is===>",firstSelectedItem.product)
      navigation.navigate("Checkout", { item:firstSelectedItem.product })
    }else{
      
      setEdited((prev) => !prev)
    }
  }
  // console.log("leng of s ===>",selectedItems.entries.length)
  return (
    <>
      <Header
        title="Bag"
        rightCom={
          <TouchableOpacity onPress={onEditPress}>
            <Text
              style={[globalStyles.editButton, !edited && { color: "gray" }]}
            >
              {selectedItems.size==2 ? "Checkout" : "Edit"}
            </Text>
          </TouchableOpacity>
        }
      />
      <View style={globalStyles.cartItemsContainer}>
        {isLoading ? (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <ActivityIndicator size="large" />
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartList
                item={item}
                edited={edited}
                setEdited={setEdited}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                toggleSelectedItem={toggleSelectedItem}
              />
            )}
            contentContainerStyle={{ columnGap: SIZES.meduim }}
          />
        )}
      </View>
    </>
  );
};

export default CartPage;
