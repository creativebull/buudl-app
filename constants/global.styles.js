import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "./index";
import { Dimensions } from "react-native";

const globalStyles = StyleSheet.create({
    appBarWrapper: {
        marginHorizontal: 10,
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Ensure items are spaced out evenly
        alignItems: 'center',
        height: 50,
    },
    brand: {
        flexDirection: 'row', // Align items horizontally
        alignItems: 'center',
    },
    alignedRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    searchIcon: {
        marginRight: 12, // Add some spacing between search and cart icons
    },
    TitleLabel: {
        fontFamily: "regular",
        fontSize: 25,
        fontWeight: "700",
        color: COLORS.primary,
    },
    titleStyle: {
        fontFamily: "nunitoregular",
        fontSize: 40
    },
    iconColor: {
        color: COLORS.secondary
    },
    locationLabel: {
        fontFamily: "nunitoregular",
        fontSize: SIZES.meduim,
        color: COLORS.primary,
    },
    wishlistColor: {
        color: COLORS.secondary
    },
    wishlistContainer: {
        position: 'relative', // Use relative positioning for the cart count
        marginRight: 12, // Add some spacing between items
    },
    cartColor: {
        color: COLORS.secondary
    },
    cartContainer: {
        position: 'relative', // Use relative positioning for the cart count
        marginRight: 12, // Add some spacing between items
    },
    cartCount: {
        position: "absolute",
        top: -8, // Adjust position to fit within the icon
        right: -8,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        zIndex: 999
    },
    cartNumber: {
        fontFamily: "nunitoregular",
        fontWeight: "800",
        fontSize: 10,
        color: COLORS.lightWhite
    },
    signUpBtn: {
        backgroundColor: COLORS.secondary,
        borderRadius: 8,
        paddingVertical: 4, // Adjust vertical padding
        paddingHorizontal: 10, // Adjust horizontal padding
        color: COLORS.white
    },
    conatiner: {
        width: "100%"
    },
    welcomeText: {
        fontFamily: "nunitoregular",
        fontSize: SIZES.xLarge -5,
        marginTop: SIZES.xSmall
    },
    container: {
        flex: 1,
    },
    welcomeText: {
        fontFamily: "nunitoregular",
        fontSize: 18,
        fontWeight: "800",
        color: COLORS.secondary,
        marginHorizontal: 12,
    },
    welcomeSubText: {
        fontFamily: "nunitoregular",
        fontSize: 12,
        color: 'black',
        marginHorizontal: 12
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayTitleText: {
        fontFamily: "nunitoregular",
        fontSize: 30,
        fontWeight: "700",
        color: COLORS.white,
        marginBottom: 5,
    },
    overlaySubText: {
        textAlign: "center",
        color: COLORS.white,
        marginBottom: 20,
    },
    overlayButton: {
        padding: 10,
        backgroundColor: COLORS.secondary,
        borderRadius: 5,
    },
    overlayButtonText: {
        fontSize: 18,
        color: 'white',
    },
    navIcon: {
        width: 20,
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 12,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.meduim,
        marginVertical: SIZES.meduim,
        height: 40
    },
    heroBannerContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.meduim,
        marginVertical: 80,
    },
    searchIcon: {
        paddingVertical: 7,
        marginHorizontal: 10,
        color: COLORS.primary
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.gray2,
        marginRight: SIZES.small,
        borderRadius: SIZES.small
    },
    searchInput: {
        fontFamily: "nunitoregular",
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn: {
        width: 50,
        height: "100%",
        borderRadius: SIZES.meduim,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary
    },
    carouselContainer: {
        flex: 1,
        alignItems: "center",
    },
    headingUnderline: {
        textDecorationLine: "underline",
        fontWeight: "bold",
        color: COLORS.primary
    },
    headingContainer: {
        flex: 1,
        marginTop: SIZES.meduim,
        marginHorizontal: 12,
    },
    headingWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headingTitle: {
        color: COLORS.secondary,
        fontFamily: "nunitoregular",
        fontWeight: "bold",
        fontSize: 18,
    },
    newArrivalsListed: {
        marginTop: SIZES.meduim,
        marginHorizontal: 12
    },
    newArrivalProductContainer: {
        width: 182,
        height: 240,
        marginEnd: 5,
    },
    newArrivalImageWrapper: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        overflow: "hidden"
    },
    arrivalImage: {
        aspectRatio: 1,
        resizeMode: "cover"
    },
    arrivalProductDetails: {
        paddingTop: 1,
        padding: SIZES.small,
    },
    arrivalProductDetailsTitle: {
        fontFamily: "nunitoregular",
        fontSize: SIZES.large,
        color: COLORS.secondary,
        fontWeight: "bold"
    },
    arrivalProductDetailsDescription: {
        fontSize: 10
    },
    arrivalProductDetailsSeller: {
        fontFamily: "nunitoregular",
        fontSize: 12,
        color: COLORS.secondary,
        fontWeight: "bold"
    },
    arrivalProductDetailsPrice: {
        fontFamily: "nunitoregular",
        fontSize: 14,
        color: COLORS.secondary,
        fontWeight: "bold"
    },
    exploreStylesListed: {
        marginBottom: 35,
        marginTop: SIZES.meduim,
        flex: 1
    },
    exploreStylesProductContainer: {
        width: 182,
        height: 240,
        backgroundColor: COLORS.gray2
    },
    exploreImageWrapper: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
    },
    exploreImage: {
        flex: 1,
        width: "100%",
    },
    addToWishlistBtn: {
        position: "absolute",
        bottom: SIZES.xSmall,
        right: SIZES.xSmall
    },
    addToCartBtn: {
        backgroundColor: COLORS.offWhite,
        flexDirection: "row",
        position: "absolute",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 5,
        top: SIZES.xSmall,
        right: SIZES.xSmall,
        borderRadius: 10,
    },
    addToCartCounter: {
        paddingLeft: 5,
        fontFamily: "nunitoregular",
        fontSize: 12,
        fontWeight: "bold",
    },
    productDetailsContainer: {
        flex: 1,
    },
    productUpperRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge,
        width: SIZES.width -44,
        zIndex: 999
    },
    staggeredContainer: {
        flexDirection: 'row', // Display images in a row
        flexWrap: 'wrap',     // Allow images to wrap to the next line
        justifyContent: 'space-between', // Space evenly between images
        paddingHorizontal: 5, // Add some horizontal padding
    },
    staggeredImage: {
        width: Dimensions.get('window').width / 4 - 10,
        height: "10%",
        marginBottom: 5, // Add some bottom margin for spacing
    },
    productInfoWrapper: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 12,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray
    },
    productInfoTitleWrapper: {
        marginVertical: 12
    },
    productInforTitle: {
        color: COLORS.secondary,
        fontFamily: "nunitoregular",
        fontWeight: "bold",
        fontSize: SIZES.xLarge
    },
    productInfoDescription: {
        color: COLORS.gray,
        fontFamily: "nunitoregular",
        fontSize: SIZES.xSmall,
        fontWeight: "bold"
    },
    productInforPrice: {
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: SIZES.large
    },
    productInforWishlist: {
        position: "absolute",
        right: 2,
        top: 12,
    },
    ctaWrapper: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 12,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 20,
    },
    ctaBtn: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    ctaBtnActive: {
        backgroundColor: COLORS.secondary,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    ctaBtnTextColor: {
        color: COLORS.white,
    },
    measurementWrapper: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 20,
        paddingHorizontal: 12
    },
    measurementTitle: {
        color: COLORS.secondary,
        fontFamily: "nunitoregular",
        fontWeight: "bold"
    },
    measurementDescription: {
        color: COLORS.gray,
        fontSize: SIZES.xSmall
    },
    measurementBtn: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        alignItems: "center"
    },
    measurementBtnText: {
        color: COLORS.secondary
    },
    stickToTopContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
    },
    productDescriptionWrapper: {
        flex: 1,
        flexDirection: "column",
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        paddingVertical: 12,
        paddingHorizontal: 12
    },
    productDescriptionTagWrapper: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 10,
    },
    tagDescCta: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 5,
        borderRadius: 10,
        marginHorizontal: 5,
    },
    productDescTagText: {
        fontSize: 12
    },
    descTitle: {
        color: COLORS.secondary,
        fontFamily: "nunitoregular",
        fontWeight: "bold",
        fontSize: SIZES.meduim
    },
    colorDescWrapper: {
        marginVertical: 10,
        marginHorizontal: 5,
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "baseline"
    },
    colorText: {
        fontSize: 12,
        color: COLORS.gray
    },
    descText1: {
        color: COLORS.secondary,
        fontSize: 12,
    },
    descText2: {
        color: COLORS.secondary,
        fontSize: 12,
    },
    descText3: {
        color: COLORS.secondary,
        fontSize: 12,
        marginTop: 12,
    },
    descText4: {
        color: COLORS.secondary,
        fontSize: 12,
        marginTop: 12,
    },
    listingCtaWrapper: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "column",
        marginVertical: 12,
        marginHorizontal: 12,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        
    },
    reportListingWrapper: {
        flexDirection: "row",
    },
    buudlPurchaseWrapper: {
        flexDirection: "row",
        marginVertical: 12,
        width: "100%"
    },
    carretBtn: {
        position: "absolute",
        right: 0
    },
    listingCtaText: {
        marginLeft: 12,
        fontSize: 12
    },
    shopWrapper: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 12,
        marginHorizontal: 12,
        justifyContent: 'space-between',
    },
    shopInfoWrapper: {
        flexWrap: "wrap",
        flexDirection: "row",
        alignItems: "center"
    },
    shopImagePlaceholder: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.gray,
        borderRadius: 50,
    },
    shopSellerInfo: {
        flexDirection: "column"
    },
    ratingWrapper: {
        flexDirection: "row",
        marginLeft: 5
    },
    shopTitle: {
        color: COLORS.secondary,
        fontSize: 12,
        fontWeight: "bold",
        marginLeft: 5
    },
    ratingText: {
        fontSize: 10,
        color: COLORS.secondary
    },
    shopLocationText: {
        color: COLORS.gray,
        marginLeft: 5,
        fontSize: 12
    },
    shopCtaWrapper: {
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    ctaBtnWrapper: {
        flexDirection: "row",
    },
    visitShopBtn: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
    },
    visitShopBtnText: {
        color: COLORS.secondary
    },
    followBtnText: {
        color: COLORS.secondary
    },
    followBtn: {
        borderWidth: 1,
        borderColor: COLORS.secondary,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 15,
        marginLeft: 5
    },
    reviewCta: {
        textDecorationLine: "underline",
        color: COLORS.secondary,
        fontWeight: "bold",
        fontSize: 14,
        marginBottom: 8
    },
    moreFromSellerWishlishBtn: {
        position: "absolute",
        backgroundColor: COLORS.white,
        borderRadius: 50,
        right: 0,
        bottom: 0,
        margin: 5
    },
    styleName: {
        fontFamily: "regular",
        fontWeight: "bold",
        fontSize: 24,
        color: COLORS.white,
        position: "absolute",
        bottom: 0,
        paddingBottom: 5,
        marginLeft: 30
    },
    categoryContainer: {
        height: 360,
        marginTop: 10,
    },
    firstCategoryImageWrapper: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    secondCategoryImageWrapper: {
        flexDirection: "row",
        justifyContent: "space-around"
    },
    categoryImage1: {
        width: "47%",
        height: 200,
    },
    categoryImage2: {
        width: "47%",
        height: 260,
    },
    categoryImage3: {
        position: "absolute",
        left: 5,
        top: -50,
        width: "47%",
        height: 150,
    },
    categoryImage4: {
        position: "absolute",
        right: 5,
        top: 8,
        width: "47%",
        height: 92,
    },
    ourPicksListed: {
        marginTop: SIZES.meduim,
        marginHorizontal: 12,
        width: "100%"
    },
    ourPicksContainer: {
        width: 180,
        height: 280,
        marginEnd: 5,
    },
    ourPicksImageWrapper: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        overflow: "hidden"
    },
    ourPickBtnActive: {
        backgroundColor: COLORS.primary,
        padding: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        alignItems: "center"
    },
    ourPickCtaWrapper: {
        marginHorizontal: "30%"
    },
    ourPickCtaText: {
        color: COLORS.white,
        fontFamily: "regular",
        fontWeight: "bold"
    },
    buudlSticker: {
        position: "absolute",
        top: -60,
        right: 0
    },
    shopSpotLightListed: {
        marginTop: SIZES.meduim,
        marginHorizontal: 12,
    },
    shopSpotLightContainer: {
        width: 250,
        height: 180,
        
    },
    shopSpotLightWrapper: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
        borderRadius: 15,
    },
    shopSpotLightImage: {
        flex: 1,
        width: "100%",
    },
    shopSpotLightCardFooter: {
        position: "absolute",
        bottom: 0,
        backgroundColor: COLORS.lightYellow,
        width: "100%",
        height: 30,
        borderRadius: 20,
    },
    shopSpotLightContent: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    shopSpotImagePlaceholder: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.secondary,
        borderRadius: 50,
        position: "absolute",
        bottom: 0,
        left: 10
    },
    shopSpotRatingWrapper: {
        paddingLeft: 90,
        marginTop: 5
    },
    shopFooterText: {
        position: "absolute",
        top: 2,
        left: 70,
        fontSize: 18,
        color: COLORS.lightBrown 
    },
    relatedProducContainer: {
        width: 150,
        height: 240,
        backgroundColor: COLORS.gray2,
        margin: 10,
    },
    relatedProductImageWrapper: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
    },
    relatedProductImage: {
        flex: 1,
        width: "100%",
    },
    buudlStarSticker: {
        position: "absolute",
        right: 10,
        bottom: -25,
        marginBottom: 10,
    },
    buudl20Sticker: {
        position: "absolute",
        right: 10,
        bottom: -70,
    },
    productDetailHeader: {
        fontSize: SIZES.xLarge,
        fontWeight: "bold",
        color: COLORS.secondary
    },
    popularItemsListed: {
        marginTop: SIZES.meduim,
        marginHorizontal: 12,
        width: "100%"
    },
    popularItemsContainer: {
        width: 180,
        height: 280,
        marginEnd: 5,
    },
    popularItemsImageWrapper: {
        flex: 1,
        width: 170,
        marginLeft: SIZES.small/2,
        marginTop: SIZES.small/2,
        overflow: "hidden"
    },
    popularItemsBtnActive: {
        backgroundColor: COLORS.primary,
        padding: 10,
        paddingHorizontal: 15,
        alignItems: "center"
    },
    popularItemsCtaWrapper: {
        marginHorizontal: "30%"
    },
    popularItemsCtaText: {
        color: COLORS.white,
        fontFamily: "regular",
        fontWeight: "bold"
    },
    shopToWatchContainer: {
        flex: 1,
        marginTop: 35,
        marginHorizontal: 12,
    },
    shopToWatchStarImage: {
        position: "absolute",
        right: 0,
        bottom: 2,
    },
    shopsToWatchListed: {
        marginHorizontal: 12,
        marginBottom: 35,
        marginTop: SIZES.meduim,
        flex: 1
    },
    shopsToWatchContainer: {
        width: 250,
        height: 180,
    },
    shopsToWatchWrapper: {
        flex: 1,
        width: "100%",
        overflow: "hidden",
    },
    shopsToWatchImage: {
        flex: 1,
        width: "100%",
    },
    shopsToWatchCardFooter: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 30,
        borderRadius: 20,
    },
    shopsToWatchFooterContent: {
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row"
    },
    shopsToWatchFooterText: {
        position: "absolute",
        top: -10,
        left: 70,
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.lightBrown 
    },
    shopsToWatchLearnMoreWrapper: {
        marginTop: 12,
        flex: 1,
        flexDirection: "row"
    },
    textUnderline: {
        textDecorationLine: "underline",
        paddingLeft: 5
    },
});

export default globalStyles;