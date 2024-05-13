import {
  StyleSheet,
  Text,
  Image,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../../constants/global.styles";
import CheckoutProudct from "../products/CheckoutProudct";
import ProductCompany from "../products/ProductCompany";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../constants";
import { NULLIMAGE } from "../../assets/images";
import { useNavigation } from "@react-navigation/native";
const CartList = ({
  item,
  edited,
  setEdited,
  selectedItems,
  setSelectedItems,
  toggleSelectedItem,
}) => {
  const [check, setCheck] = useState(false);

  const handlePressBag = () => {
    if (edited) {
      toggleSelectedItem(item);
      setCheck((prev) => !prev);
    }
  };

  const isSelected = selectedItems.has(item);
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={handlePressBag}
        style={[
          edited && { flexDirection: "row" },
          isSelected
            ? { backgroundColor: "rgba(248,111,3,0.10)", paddingHorizontal: 10 }
            : { paddingHorizontal: 10 },
        ]}
      >
        {edited && (
          <AntDesign
            name={check ? "checkcircle" : "checkcircleo"}
            size={25}
            color={check ? COLORS.primary : "rgba(49,13,0,0.5)"}
            style={{ alignSelf: "center", marginRight: 10, marginLeft: 5 }}
          />
        )}
        <View style={globalStyles.bagContainer}>
          <ProductCompany
            name="Beautiful Shop"
            city="Cebu City"
            imageUrl="https://www.bunburycentral.com.au/wp-content/uploads/2018/11/BeautyShop.jpg"
          />
          <View style={globalStyles.addToCartContainer}>
            <View style={globalStyles.horizontalView}>
              <Image
                source={
                  item?.product?.images[0]?.path
                    ? { uri: item?.product?.images[0]?.path }
                    : NULLIMAGE
                }
                style={globalStyles.checkOutProudctImage}
              />
              <View>
                <Text style={globalStyles.productName}>
                  {item.product.product_name}
                </Text>
                <Text style={globalStyles.productType}>P325</Text>
              </View>
            </View>

            {edited ? (
              <View />
            ) : (
              <TouchableOpacity>
                <AntDesign name="hearto" size={30} color={COLORS.primary} />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={globalStyles.bagScreenButton}
            onPress={() =>
              navigation.navigate("Checkout", { item: item.product })
            }
          >
            <Text style={globalStyles.buttonText}>CheckOut</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <View style={globalStyles.divider} />
    </>
  );
};

export default CartList;

const styles = StyleSheet.create({});
