import { Text, ScrollView, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from 'react';
import globalStyles from "../constants/global.styles";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { SliderBox } from "react-native-image-slider-box";
import { MoreFromSellerRow, MoreFromSellerHeading, RelatedProductsHeading, RelatedProductRow } from "../components";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CenteredAlert from '../partials/CenteredAlert';
import axios from "axios";
const hostUrl = process.env.HOST_URL
const apiUrl = process.env.API_URL

const ProductDetails = () => {
    const route = useRoute();
    const {item} = route.params;
    const navigation = useNavigation();
    const insets = useSafeAreaInsets();
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [buttonLabel, setButtonLabel] = useState('');
    const [onPressAction, setOnPressAction] = useState(() => {});
    //change this slider image to map to loop all images
    const slides = [
        hostUrl + item.image,
    ];

    const data = {
        quantity: 1,
        price: item.price
    }

    const addToBag = async() => {
        try {
            const token = await AsyncStorage.getItem('token');
            if (!token) {
                // If not logged in, redirect to Login page
                navigation.navigate('Login');
                return; // Exit the function
            }
            const response = await axios.post(
                apiUrl + `cart/${item.id}`,
                data,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            if (response.data.data) {
                errorMessage = response.data.message;
            }
            setShowAlert(true);
            setButtonLabel('View Cart');
            setOnPressAction(() => () => {
                setShowAlert(false);
                navigation.navigate('Cart')
            });
            setAlertMessage(errorMessage);
        } catch (error) {
            console.log("Failed to add to bag due to : ", error);
        }
    }

    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 10 }}>
                {showAlert && (
                    <CenteredAlert
                    message={alertMessage}
                    onClose={() => setShowAlert(false)}
                    buttonOnPress={onPressAction}
                    buttonLabel={buttonLabel}
                    />
                )}
                <View style={globalStyles.productDetailsContainer}>
                    <View style={globalStyles.productUpperRow}> 
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Ionicons name="chevron-back" size={30} color={COLORS.secondary}/>
                        </TouchableOpacity>
                        <Text style={globalStyles.productDetailHeader}>Product Details</Text>
                        <TouchableOpacity onPress={()=>{}}>
                            <Ionicons name="share-outline" size={30} color={COLORS.secondary}/>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <View>
                    <SliderBox 
                        images={slides}
                        dotColor={COLORS.primary}
                        inactiveDotColor={COLORS.secondary}
                        ImageComponentStyle={{width: "100%", marginTop: 70}}
                        autoplay
                        circleLoop
                    />
                </View>
                
                <View style={globalStyles.productInfoWrapper}>
                    <View style={globalStyles.productInfoTitleWrapper}>
                        <Text style={globalStyles.productInforTitle}>{item.product_name} - {item.product_code}</Text>
                        <Text style={globalStyles.productInfoDescription}>{item.product_description}</Text>
                        <Text style={globalStyles.productInforPrice}>P{item.price}</Text>
                    </View>
                    <View>
                        <Ionicons name="heart-outline" size={35} color={COLORS.primary} style={globalStyles.productInforWishlist}/>
                    </View>
                </View>

                <View style={globalStyles.ctaWrapper}>
                    <TouchableOpacity onPress={()=>addToBag()}>
                        <Text style={globalStyles.ctaBtn}>Add to bag</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.ctaBtn}>
                        <Text>Make an Offer</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={globalStyles.ctaBtnActive}>
                        <Text style={globalStyles.ctaBtnTextColor}>Buy now</Text>
                    </TouchableOpacity>
                </View>

                <View style={globalStyles.measurementWrapper}>
                    {item.size ? (
                        <View style={globalStyles.productDescriptionTagWrapper}>
                            {item.size.map((size, sizeIndex) => (
                                <TouchableOpacity>
                                    <Text key={sizeIndex} style={globalStyles.tagDescCta}>{size}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    ) : (
                        <View>
                            <Text style={globalStyles.measurementTitle}>Measurements</Text>
                            <Text style={globalStyles.measurementDescription}>Let the seller know you are interested in measurement details. We'll notify you as soon as they have added.</Text>
                            <TouchableOpacity style={globalStyles.measurementBtn}>
                                <Text style={globalStyles.measurementBtnText}>Request Measurements</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    
                </View>

                <View style={globalStyles.productDescriptionWrapper}>
                    <Text style={globalStyles.descTitle}>Description</Text>
                    <View style={globalStyles.colorDescWrapper}>
                        <Entypo name="drop" color={COLORS.gray} size={15}/>
                        <Text style={globalStyles.colorText}>{item.color}</Text>
                    </View>
                    <Text style={globalStyles.descText1}>Product Brand : {item.product_brand}</Text>
                    <Text style={globalStyles.descText2}>Condition: {item.condition}</Text>
                    <Text style={globalStyles.descText3}>{item.product_description}</Text>
                    <View style={globalStyles.productDescriptionTagWrapper}>
                        {item.keyword.map((keyword, index) => (
                            <TouchableOpacity key={index} style={globalStyles.tagDescCta} onPress={() => navigation.navigate("Store")}>
                                <Text style={globalStyles.productDescTagText}>#{keyword}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <View style={globalStyles.listingCtaWrapper}>
                    <TouchableOpacity onPress={()=>{}} style={globalStyles.reportListingWrapper}>
                        <Ionicons name="warning" size={20} color={COLORS.secondary}/>
                        <Text style={globalStyles.listingCtaText}>Report Listing</Text>
                        <AntDesign name="right" size={20} color={COLORS.secondary} style={globalStyles.carretBtn}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}} style={globalStyles.buudlPurchaseWrapper}>
                        <AntDesign name="Safety" size={20} color={COLORS.secondary}/>
                        <Text style={globalStyles.listingCtaText}>Buudl Purchase Protection</Text>
                        <AntDesign name="right" size={20} color={COLORS.secondary} style={globalStyles.carretBtn}/>
                    </TouchableOpacity>
                </View>

                <View style={globalStyles.shopWrapper}>
                    <View style={globalStyles.shopInfoWrapper}>
                        <View style={globalStyles.shopImagePlaceholder}>
                            <Image
                                source={{ uri: hostUrl + item.user.profile_picture }}
                                style={globalStyles.arrivalImage}
                            />
                        </View>
                        <View style={globalStyles.shopSellerInfo}>
                            {item.shop ? (
                                <View>
                                    <Text style={globalStyles.shopTitle}>{item.shop.name}</Text>
                                    <View style={globalStyles.ratingWrapper}>
                                        {[1,2,3,4,5].map((index) => (
                                            <Ionicons 
                                                key={index}
                                                name="star"
                                                color={COLORS.primary}
                                                size={12}/>
                                        ))}
                                        <Text style={globalStyles.ratingText}>(item.shop.rating)</Text>
                                    </View>
                                    <Text style={globalStyles.shopLocationText}>{item.shop.address}</Text>
                                </View>
                            ) : (
                                <View>
                                    <Text style={globalStyles.shopTitle}>{item.user.name}</Text>
                                    <Text style={globalStyles.shopLocationText}>{item.user.address}</Text>
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
                                <TouchableOpacity style={globalStyles.visitShopBtn} onPress={() => navigation.navigate("SellerShops")}>
                                    <Text style={globalStyles.visitShopBtnText}>Visit Shop</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={globalStyles.followBtn}>
                                    <Text style={globalStyles.followBtnText}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <View style={globalStyles.ctaBtnWrapper}>
                                <TouchableOpacity style={globalStyles.visitShopBtn} onPress={() => navigation.navigate("UserProfile")}>
                                    <Text style={globalStyles.visitShopBtnText}>Visit Profile</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={globalStyles.followBtn}>
                                    <Text style={globalStyles.followBtnText}>Follow</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>

                <View style={globalStyles.moreFromSellerWrapper}>
                    <MoreFromSellerHeading/>
                    <MoreFromSellerRow item={item}/>
                </View>

                <View style={globalStyles.relatedProductWrapper}>
                    <RelatedProductsHeading/>
                    <RelatedProductRow item={item.product_code}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails