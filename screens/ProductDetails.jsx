import { Text, ScrollView, View, TouchableOpacity } from "react-native";
import React from 'react';
import globalStyles from "../constants/global.styles";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { SliderBox } from "react-native-image-slider-box";
import SlideOne from "../assets/images/hero_carousel/slide_1.png";
import SlideTwo from "../assets/images/hero_carousel/slide_2.png";
import SlideThree from "../assets/images/hero_carousel/slide_3.png";
import SlideFour from "../assets/images/hero_carousel/slide_4.png";
import SlideFive from "../assets/images/hero_carousel/slide_5.png";
import { MoreFromSellerRow, MoreFromSellerHeading, RelatedProductsHeading, RelatedProductRow } from "../components";


const ProductDetails = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const slides = [
        SlideOne,
        SlideTwo,
        SlideThree,
        SlideFour,
        SlideFive
    ];
    return (
        <SafeAreaView>
            <ScrollView contentContainerStyle={{ paddingBottom: insets.bottom + 100 }}>
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
                        <Text style={globalStyles.productInforTitle}>Shiny Cropped Top</Text>
                        <Text style={globalStyles.productInfoDescription}>US M - Used - Good Condition</Text>
                        <Text style={globalStyles.productInforPrice}>P250</Text>
                    </View>
                    <View>
                        <Ionicons name="heart-outline" size={35} color={COLORS.primary} style={globalStyles.productInforWishlist}/>
                    </View>
                </View>

                <View style={globalStyles.ctaWrapper}>
                    <TouchableOpacity onPress={()=>{}}>
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
                    <Text style={globalStyles.measurementTitle}>Measurements</Text>
                    <Text style={globalStyles.measurementDescription}>Let the seller know you are interested in measurement details. We'll notify you as soon as they have added.</Text>
                    <TouchableOpacity style={globalStyles.measurementBtn}>
                        <Text style={globalStyles.measurementBtnText}>Request Measurements</Text>
                    </TouchableOpacity>
                </View>

                <View style={globalStyles.productDescriptionWrapper}>
                    <Text style={globalStyles.descTitle}>Description</Text>
                    <View style={globalStyles.colorDescWrapper}>
                        <Entypo name="drop" color={COLORS.gray} size={15}/>
                        <Text style={globalStyles.colorText}>Gray</Text>
                    </View>
                    <Text style={globalStyles.descText1}>Used once cropped top from H&M. I ship worldwide!</Text>
                    <Text style={globalStyles.descText2}>Condition: 8/10</Text>
                    <Text style={globalStyles.descText3}>Please check all my pics</Text>
                    <Text style={globalStyles.descText4}>Follow my account for more items!</Text>
                    <View style={globalStyles.productDescriptionTagWrapper}>
                        <TouchableOpacity style={globalStyles.tagDescCta}>
                            <Text style={globalStyles.productDescTagText}>#Vintage</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.tagDescCta}>
                            <Text style={globalStyles.productDescTagText}>#Nylon</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.tagDescCta}>
                            <Text style={globalStyles.productDescTagText}>#RETRO</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={globalStyles.tagDescCta}>
                            <Text style={globalStyles.productDescTagText}>#H&M</Text>
                        </TouchableOpacity>
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
                        <View style={globalStyles.shopImagePlaceholder}></View>
                        <View style={globalStyles.shopSellerInfo}>
                            <Text style={globalStyles.shopTitle}>Beautiful Shop</Text>
                            <View style={globalStyles.ratingWrapper}>
                                <Ionicons name="star" color={COLORS.primary} size={12}/>
                                <Ionicons name="star" color={COLORS.primary} size={12}/>
                                <Ionicons name="star" color={COLORS.primary} size={12}/>
                                <Ionicons name="star" color={COLORS.primary} size={12}/>
                                <Ionicons name="star-outline" color={COLORS.primary} size={12}/>
                                <Text style={globalStyles.ratingText}>(32)</Text>
                            </View>
                            <Text style={globalStyles.shopLocationText}>Cebu City</Text>
                        </View>
                    </View>
                    <View style={globalStyles.shopCtaWrapper}>
                        <Text style={globalStyles.reviewCta}>See Reviews</Text>
                        <View style={globalStyles.ctaBtnWrapper}>
                            <TouchableOpacity style={globalStyles.visitShopBtn}>
                                <Text style={globalStyles.visitShopBtnText}>Visit Shop</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={globalStyles.followBtn}>
                                <Text style={globalStyles.followBtnText}>Follow</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={globalStyles.moreFromSellerWrapper}>
                    <MoreFromSellerHeading/>
                    <MoreFromSellerRow/>
                </View>

                <View style={globalStyles.relatedProductWrapper}>
                    <RelatedProductsHeading/>
                    <RelatedProductRow/>
                    {/* <RelatedProductRow/> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default ProductDetails