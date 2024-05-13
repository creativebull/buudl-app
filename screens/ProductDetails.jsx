import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../constants/global.styles";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Ionicons, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { SliderBox } from "react-native-image-slider-box";
import {
  MoreFromSellerRow,
  MoreFromSellerHeading,
  RelatedProductsHeading,
  RelatedProductRow,
  Header,
} from "../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CenteredAlert from "../partials/CenteredAlert";
import axios from "axios";
import MakeOfferPopup from "../components/make-offer/MakeOffer";
import BuudlPurchaseProtection from "../components/report/BuudlPurchaseProtection";
import ReportListingModal from "../components/report/ReportListingModal";

const ProductDetails = () => {
  const hostUrl = process.env.HOST_URL;
  const apiUrl = process.env.API_URL;
  // console.log("apiurl===>",apiUrl+')
  const route = useRoute();
  const { item } = route.params;
  console.log("item is======>", item);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [showAlert, setShowAlert] = useState(false);
  const [sliderLoading, setSliderLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");
  const [onPressAction, setOnPressAction] = useState(() => {});
  const [showMakeOfferPopup, setShowMakeOfferPopup] = useState(false);
  const [showReportListingModal, setShowReportListingModal] = useState(false);
  const [showBuudlPurchaseProtection, setShowBuudlPurchaseProtection] =
    useState(false);
  const [slides, setSlides] = useState([]);

  const openBuudlPurchaseProtection = () => {
    setShowBuudlPurchaseProtection(true);
  };

  const closeBuudlPurchaseProtection = () => {
    setShowBuudlPurchaseProtection(false);
  };
  const getImagePaths = () => {
    const res = item?.images.map((image) => image.path);
    console.log("Res is ===>", res);
    setSlides(res);
  };
  React.useEffect(() => {
    getImagePaths();
  }, []);
  React.useEffect(() => {
    setTimeout(() => {
      setSliderLoading(false);
    }, 3000);
  }, []);

  // const slides = [hostUrl + item.image];
  // console.log("Item id is =====>",item.id)

  const addToBag = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (!token) {
        navigation.navigate("Login");
        return;
      }
      console.log("token is ===>", token);
      const response = await axios.post(
        `${apiUrl}cart/addToCart/${item.id}`,
        {
          quantity: 1,
          price: item.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Add to bag response is ====>", response);
      let errorMessage;
      if (response.data) {
        // errorMessage = response.data.message;
        console.log("Item to cart ====>", response.data);
      }
      setShowAlert(true);
      //   setButtonLabel("View Cart");
      //   setOnPressAction(() => () => {
      //     setShowAlert(false);
      //     navigation.navigate("Cart");
      //   });
      //   setAlertMessage(errorMessage);
    } catch (error) {
      console.log("Failed to add to bag due to : ", error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 10 }}>
        {showAlert && (
          <CenteredAlert
            message={`${item?.product_name} added to cart`}
            state={showAlert}
            setState={setShowAlert}
            buttonOnPress={() => navigation.navigate("Cart")}
            buttonLabel={"View Cart"}
            icon={<FontAwesome name="shopping-cart" color="green" size={40} />}
          />
        )}
        {/* <View style={globalStyles.productDetailsContainer}>
          <View style={globalStyles.productUpperRow}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="chevron-back"
                size={30}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
            <Text style={globalStyles.productDetailHeader}>
              Product Details
            </Text>
            <TouchableOpacity onPress={() => {}}>
              <Ionicons
                name="share-outline"
                size={30}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>
        </View> */}
        <Header title="Product Details" style={{ height: 50 }} />
        {item?.images[0]?.path && !sliderLoading ? (
          <View>
            <SliderBox
              images={slides}
              dotColor={COLORS.primary}
              inactiveDotColor={COLORS.secondary}
              ImageComponentStyle={{ width: "100%", marginTop: 10 }}
              autoplay
              circleLoop
              imageLoadingColor="transparent"
            />
          </View>
        ) : item?.images[0]?.path ? (
          <ActivityIndicator />
        ) : null}

        <View style={globalStyles.productInfoWrapper}>
          <View style={globalStyles.productInfoTitleWrapper}>
            <Text style={globalStyles.productInforTitle}>
              {item.product_name} - {item.product_code}
            </Text>
            <Text style={globalStyles.productInfoDescription}>
              {item.product_description}
            </Text>
            <Text style={globalStyles.productInforPrice}>P{item.price}</Text>
          </View>
          <View>
            <Ionicons
              name="heart-outline"
              size={35}
              color={COLORS.primary}
              style={globalStyles.productInforWishlist}
            />
          </View>
        </View>

        <View style={globalStyles.measurementWrapper}>
          {item.size ? (
            <View style={globalStyles.productDescriptionTagWrapper}>
              {item?.size?.map((size, sizeIndex) => (
                <TouchableOpacity key={sizeIndex}>
                  <Text style={globalStyles.tagDescCta}>{size}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <View>
              <Text style={globalStyles.measurementTitle}>Measurements</Text>
              <Text style={globalStyles.measurementDescription}>
                Let the seller know you are interested in measurement details.
                We'll notify you as soon as they have added.
              </Text>
              <TouchableOpacity style={globalStyles.measurementBtn}>
                <Text style={globalStyles.measurementBtnText}>
                  Request Measurements
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={globalStyles.productDescriptionWrapper}>
          <Text style={globalStyles.descTitle}>Description : {item?.product_description}</Text>
          <View style={globalStyles.colorDescWrapper}>
            <Entypo name="drop" color={COLORS.gray} size={15} />
            <Text style={globalStyles.colorText}>{item.color}</Text>
          </View>
          <Text style={globalStyles.descText1}>
            Product Brand : {item.product_brand}
          </Text>
          <Text style={globalStyles.descText2}>
            Condition: {item.condition}
          </Text>
          {/* <Text style={globalStyles.descText3}>{item.product_description}</Text> */}
          <View style={globalStyles.productDescriptionTagWrapper}>
            {item?.keyword?.map((keyword, index) => (
              <TouchableOpacity
                key={index}
                style={globalStyles.tagDescCta}
                onPress={() => navigation.navigate("Store")}
              >
                <Text style={globalStyles.productDescTagText}>#{keyword}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={globalStyles.listingCtaWrapper}>
          <TouchableOpacity
            onPress={() => setShowReportListingModal(true)}
            style={globalStyles.reportListingWrapper}
          >
            <Ionicons name="warning" size={20} color={COLORS.secondary} />
            <Text style={globalStyles.listingCtaText}>Report Listing</Text>
            <AntDesign
              name="right"
              size={20}
              color={COLORS.secondary}
              style={globalStyles.carretBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={openBuudlPurchaseProtection}
            style={globalStyles.buudlPurchaseWrapper}
          >
            <AntDesign name="Safety" size={20} color={COLORS.secondary} />
            <Text style={globalStyles.listingCtaText}>
              Buudl Purchase Protection
            </Text>
            <AntDesign
              name="right"
              size={20}
              color={COLORS.secondary}
              style={globalStyles.carretBtn}
            />
          </TouchableOpacity>
        </View>

        <View style={globalStyles.shopWrapper}>
          <View style={globalStyles.shopInfoWrapper}>
            <View style={globalStyles.shopImagePlaceholder}>
              <Image
                source={{ uri: hostUrl + item?.user?.profile_picture || null }}
                style={globalStyles.arrivalImage}
              />
            </View>
            <View style={globalStyles.shopSellerInfo}>
              {item.shop ? (
                <View>
                  <Text style={globalStyles.shopTitle}>{item.shop.name}</Text>
                  <View style={globalStyles.ratingWrapper}>
                    {[1, 2, 3, 4, 5].map((index) => (
                      <Ionicons
                        key={index}
                        name="star"
                        color={COLORS.primary}
                        size={12}
                      />
                    ))}
                    <Text style={globalStyles.ratingText}>
                      (item.shop.rating)
                    </Text>
                  </View>
                  <Text style={globalStyles.shopLocationText}>
                    {item.shop.address}
                  </Text>
                </View>
              ) : (
                <View>
                  <Text style={globalStyles.shopTitle}>{item.user.name}</Text>
                  <Text style={globalStyles.shopLocationText}>
                    {item.user.address}
                  </Text>
                </View>
              )}
            </View>
          </View>
          <View style={globalStyles.shopCtaWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate("Reviews")}>
              <Text style={globalStyles.reviewCta}>See Reviews</Text>
            </TouchableOpacity>
            {item.shop ? (
              <View style={globalStyles.ctaBtnWrapper}>
                <TouchableOpacity
                  style={globalStyles.visitShopBtn}
                  onPress={() => navigation.navigate("SellerShops")}
                >
                  <Text style={globalStyles.visitShopBtnText}>Visit Shop</Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.followBtn}>
                  <Text style={globalStyles.followBtnText}>Follow</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={globalStyles.ctaBtnWrapper}>
                <TouchableOpacity
                  style={globalStyles.visitShopBtn}
                  onPress={() => navigation.navigate("UserProfile")}
                >
                  <Text style={globalStyles.visitShopBtnText}>
                    Visit Profile
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={globalStyles.followBtn}>
                  <Text style={globalStyles.followBtnText}>Follow</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        <View style={globalStyles.moreFromSellerWrapper}>
          <MoreFromSellerHeading />
          <MoreFromSellerRow item={item} />
        </View>

        <View style={globalStyles.relatedProductWrapper}>
          <RelatedProductsHeading />
          <RelatedProductRow item={item.product_code} />
        </View>

        <View style={globalStyles.productBottomButtons}>
          <TouchableOpacity style={globalStyles.buttonSm} onPress={addToBag}>
            <Text style={globalStyles.buttonSmText}>Add to bag</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={globalStyles.buttonSm}
            onPress={() => setShowMakeOfferPopup(true)}
          >
            <Text style={globalStyles.buttonSmText}>Make an offer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[globalStyles.buttonSm, { backgroundColor: "#310D00" }]}
            onPress={() => navigation.navigate("Checkout", { item })}
          >
            <Text style={[globalStyles.buttonSmText, { color: "white" }]}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <MakeOfferPopup
        visible={showMakeOfferPopup}
        onClose={() => setShowMakeOfferPopup(false)}
        onSendOffer={(offer) => {
          // Handle sending the offer here
          console.log("Sending offer:", offer);
        }}
      />

      <BuudlPurchaseProtection
        onClose={closeBuudlPurchaseProtection}
        isVisible={showBuudlPurchaseProtection}
        onFeedback={(feedback) => {
          console.log("Feedback:", feedback);
        }}
      />

      <ReportListingModal
        isVisible={showReportListingModal}
        onClose={() => setShowReportListingModal(false)}
        onReportSubmit={(reason, details) => {
          console.log("Report reason:", reason);
          console.log("Report details:", details);
        }}
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
