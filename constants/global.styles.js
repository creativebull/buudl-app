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
        marginRight: 12,
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
    mainSearchContainer: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        marginHorizontal: 12,
        backgroundColor: COLORS.gray2,
        borderRadius: SIZES.meduim,
        marginVertical: SIZES.meduim,
        height: 40,
        zIndex: 999
    },
    searchBack: {
        zIndex: 1,
        backgroundColor: COLORS.offWhite
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
        marginHorizontal: 12
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
        width: "50%",
        height: 150,
    },
    categoryImage4: {
        position: "absolute",
        right: 5,
        top: 8,
        width: "50%",
        height: 92,
    },
    categoryImageBackground: {
        width: "100%",
        height: "100%"
    },
    categoryText1: {
        position: "absolute",
        left: 80,
        bottom: 0,
        fontSize: 25,
        fontWeight: "bold",
        color: COLORS.pink
    },
    categoryText2: {
        position: "absolute",
        bottom: 0,
        fontSize: 25,
        fontWeight: "bold",
        left: 50,
        bottom: 30,
        width: 150,
        color: COLORS.primary
    },
    categoryText3: {
        position: "absolute",
        bottom: 0,
        fontSize: 25,
        fontWeight: "bold",
        left: -40,
        color: COLORS.secondary
    },
    categoryText4: {
        position: "absolute",
        bottom: 0,
        fontSize: 25,
        fontWeight: "bold",
        left: -22,
        color: COLORS.violet
    },
    catImage1: {
        height: 200,
        width: 220
    },
    catImage2: {
        height: 230,
        width: 190
    },
    catImage3: {
        left: -108,
        height: 150,
        width: 220
    },
    catImage4: {
        left: -82,
        top: -30,
        height: 123,
        width: 190
    },
    ourPicksListed: {
        marginTop: SIZES.meduim,
        marginHorizontal: 12,
        width: "100%"
    },
    ourPicksContainer: {
        width: 210,
        height: 280,
        marginEnd: 5,
    },
    ourPicksImageWrapper: {
        flex: 1,
        width: 195,
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
        // backgroundColor: COLORS.secondary,
        borderRadius: 50,
        position: "absolute",
        bottom: -20,
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
    relatedProductContainer: {
        width: 203,
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
        width: 210,
        height: 280,
        marginEnd: 5,
    },
    popularItemsImageWrapper: {
        flex: 1,
        width: 195,
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
    shopsToWatchInitialText: {
        fontSize: 16
    },
    textUnderline: {
        fontSize: 16,
        textDecorationLine: "underline",
        paddingLeft: 5
    },
    relatedProoductsListed: {
        marginBottom: 35,
        marginTop: SIZES.meduim,
        flex: 1
    },
    goBackContainer: {
        flex: 1,
        marginTop: 20
    },
    goBackRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge,
        width: SIZES.width -44,
        zIndex: 999
    },
    sceneContainer: {
        flex: 1,
    },
    storeViewContainer: {
        flex: 1,
    },
    storeTabView: {
        flex: 1,
        position: "relative",
        marginTop: -800
    },
    sellerGoBackContainer: {
        flex: 1,
    },
    sellerGoBackRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        position: "absolute",
        top: SIZES.xLarge,
        width: SIZES.width -44,
        zIndex: 999
    },
    tabDesign: {
        backgroundColor: COLORS.offWhite
    },
    tabTextColor : {
        color: COLORS.primary,
        fontSize: 14,
        fontWeight: "bold"
    },
    tabIndicatorColor: {
        backgroundColor: COLORS.primary
    },
    noSearchContainer: {
        flex: 1,
        marginTop: "50%",
        flexDirection: "column",
        alignItems: "center"
    },
    noResultsImage: {
        width: "100%",
    },
    noSearchText: {
        fontSize: 24,
        marginTop: 40,
        color: COLORS.secondary,
        fontFamily: "regular",
        fontWeight: "bold"
    },
    goBackLoginContainer: {
        flex: 1,
    },
    goBackLoginRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "absolute",
        top: -SIZES.xLarge,
        width: SIZES.width -44,
        zIndex: 999
    },
    loginContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    loginCard: {
        width: "80%",
        marginVertical: "20%",
        marginHorizontal: 12
    },
    loginInput: {
        backgroundColor: COLORS.gray2,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 20,
        marginBottom: 20,
    },
    loginBtn: {
        flex: 1,
        alignItems: "center",
        borderRadius: 20,
        borderWidth: 1,
        padding: 10,
        borderColor: COLORS.black,
        backgroundColor: COLORS.primary,
    },
    loginBtnText: {
        color: COLORS.white,
        fontFamily: "nunitoregular",
        fontSize: 16,
        fontWeight: "bold"
    },
    loginSubText: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        marginVertical: 20,
    },
    loginRegisterRedirectText: {
        color: COLORS.primary
    },
    cartItemsContainer: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 10
    },
    cartList: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        height: 80,
        backgroundColor: COLORS.primary,
        borderBottomWidth: 1,
        borderColor: COLORS.black
    },
    cartListImageWrapper: {
        flex: 1,
        width: "20%",
        overflow: "hidden",
    },
    cartListImage: {
        flex: 1,
        width: 90,
        backgroundColor: COLORS.gray2
    },
    signupHeaderContainer: {
        flex: 1,
        marginBottom: 70,
    },
    signupHeader: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    signupHeaderText: {
        fontSize: 20,
        fontFamily: "nunitoregular",
        fontWeight: "bold",
        color: COLORS.secondary
    },
    signupSubText: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center"
    },
    signupSubTextText: {
        fontSize: 18,
        fontFamily: "nunitoregular",
        color: COLORS.secondary
    },
    signupGprLink: {
        color: COLORS.primary,
        textDecorationLine: "underline",
        fontSize: 12
    },
    signupGeneralText: {
        fontSize: 12
    },
    registerCtaBtnWrapper: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between"
    },
    registerFirstNameInput: {
        width: "50%",
        backgroundColor: COLORS.gray2,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 20,
        marginBottom: 20,
    },
    registerLastNameInput: {
        width: "50%",
        backgroundColor: COLORS.gray2,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.black,
        borderRadius: 20,
        marginBottom: 20,
    },
    spinner: {
        marginTop: 20,
    },
    userTabView: {
        flex: 1,
        marginTop: 50
    },
    userSceneContainer: {
        flex: 1,
        marginTop: 200,
        backgroundColor: COLORS.primary
    },
    userInfoContainer: {
        flex: 1,
        marginHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 60,
    },
    profilePic: {
        backgroundColor: COLORS.gray2,
        width: 100,
        height: 100,
        borderRadius: 100
    },
    userName: {
        marginTop: 20,
        marginLeft: 10
    },
    userTextName: {
        fontFamily: "nunitoregular",
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.secondary
    },
    userFollowing: {
        alignItems: "center"
    },
    userFollowers: {
        alignItems: "center"
    },
    userFollowingCounter: {
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 5
    },
    followingSubtext: {
        color: COLORS.gray,
        marginBottom: 20,
    },
    editProfileButton: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 13
    },
    editProfileText: {
        color: COLORS.primary
    },
    userFollowersCounter: {
        color: COLORS.secondary,
        fontSize: 20,
        fontWeight: "500",
        marginBottom: 5
    },
    followersSubtext: {
        color: COLORS.gray,
        marginBottom: 20,
    },
    shareProfileButton: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: 13
    },
    shareProfileText: {
        color: COLORS.primary
    },
    hubTabView: {
        flex: 1,
        marginTop: 20
    },
    hubViewContainer: {
        flex: 1,
    },
    hubInfoContainer: {
        flex: 1,
        marginHorizontal: 25,
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 60,
    },
    hubTextContainer: {
        width: "100%",
        alignItems: "center"
    },
    hubText: {
        color: COLORS.secondary,
        fontSize: 30
    },
    hubSceneContainer: {
        flex: 1,
    },
    accountTabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 25,
    },
    accountTab: {
        paddingHorizontal: 47,
        paddingVertical: 10,
    },
    accountTabText: {
        fontSize: 16,
        opacity: 0.5
    },
    accountActiveText: {
        fontSize: 16,
        opacity: 1,
        color: COLORS.primary
    },
    accountActiveTab: {
        borderBottomWidth: 2,
        borderBottomColor: COLORS.primary,
    },
    accountTabContent: {
        padding: 20,
    },
    accountSellerContainer: {
        flex: 1,
    },
    buudlShopIcon: {  
        width: 80,
        height: 80,
        marginBottom: 40,
    },
    sellerHeader: {
        alignItems: "center"
    },
    accountSellingSubText: {
        textAlign: "center",
        marginBottom: 50
    },
    sellNowButton: {
        backgroundColor: COLORS.primary,
        padding: 20,
        borderRadius: 20,
        width: "80%"
    },
    sellNowButtonText: {
        color: COLORS.white,
        textAlign: "center",
        fontFamily: "nunitoregular"
    },
    sellerRegistrationContainer: {
        flex: 1,
        marginBottom: 0
    },
    sellerRegistrationBackgorundImage: {
        flex: 1,
        resizeMode: 'cover',
        width: "100%",
    },
    sellerImageOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    sellerContextContainer: {
        position: "absolute",
        bottom: "30%",
        left: 20
    },
    sellerRegistrationHeader: {
        fontFamily: "nunitoregular",
        fontSize: 40,
        color: COLORS.white,
        fontWeight: "700",
        marginBottom: -35
    },
    sellerRegistrationCompName: {
        fontFamily: "nunitoregular",
        fontSize: 110,
        color: COLORS.white,
        fontWeight: "700",
        marginBottom: -30
    },
    sellerRegistrationTagLine: {
        fontFamily: "nunitoregular",
        fontSize: 18,
        fontWeight: "700",
        color: COLORS.primary,
    },
    sellerBottomContextContainer: {
        position: "absolute",
        bottom: "10%",
        left: 20
    },
    sellerRegistrationBottomHeader: {
        fontSize: 14,
        color: COLORS.white
    },
    closeSellerRegistration: {
        zIndex: 999,
        position: "absolute",
        right: 10,
        top: 10
    },
    closeText: {
        fontFamily: "nunitoregular",
        color: COLORS.white,
        fontSize: 30,
        fontWeight: "bold"
    },
    sellerRegistrationPageContainer: {
        flex: 1,
        flexDirection: "column",
    },
    sellerRegistrationTitle: {
        fontSize: SIZES.xLarge,
        fontWeight: "bold",
        color: COLORS.secondary
    },
    sellerRegistrationSubTitle: {
        fontSize: 14,
        color: COLORS.secondary
    },
    sellerGoBackContainer: {
        flex: 1,
        marginTop: 20
    },
    sellerGoBackRow: {
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        zIndex: 999
    },
    sellerHeading: {
        alignItems: "center",
        marginTop: -30
    },
    sellerRadioContainer: {
        flexDirection: "column",
        top: 70,
    },
    sellerRadioText: {
        marginHorizontal: 20,
        fontFamily: "regular",
        fontSize: 15,
        fontWeight: "bold",
        marginBottom: 15
    },
    radioContatiner: {
        marginLeft: -300
    },
    sellerTypeContainer: {
        marginTop: 100
    },
    sellerInputContainer: {
        marginHorizontal: 20
    },
    sellerInfoText: {
        fontFamily: "regular",
        fontSize: 20,
        color: COLORS.gray
    },
    sellerShopNameInput: {
        fontFamily: "nunitoregular",
        paddingHorizontal: SIZES.small,
        width: 120
    },
    sellerGroupInput: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderColor: COLORS.gray,
    },
    sellerGroupInputLabel: {
        fontSize: 13
    },
    spacer: {
        marginVertical: 10
    },
    sellerFooterContainer: {
        marginTop: 60,
        alignItems: "center"
    },
    sellerContinueBtn: {
        alignItems: "center",
        width: "90%",
        paddingVertical: 20,
        backgroundColor: COLORS.primary,
        borderRadius: 10
    },
    sellerContinueBtnText: {
        color: COLORS.white
    },
    sellerVertificationGroupHeader: {
        flex: 1,
        flexDirection: "row",
    },
    sellerVerificationHeader: {
        marginHorizontal: 50,
        marginTop: 20,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black
    },
    sellerVerificationTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.secondary,
        fontFamily: "nunitoregular"
    },
    sellerVerificationTitleOrange: {
        fontSize: 30,
        fontWeight: "bold",
        color: COLORS.secondary,
        fontFamily: "nunitoregular",
        color: COLORS.primary
    },
    sellerVerificationSubTitle: {
        fontSize: 14,
        color: COLORS.secondary,
        marginTop: 20,
        marginBottom: 20
    },
    sellerVerificationBlockBB: {
        marginTop: 30,
        marginHorizontal: 50,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.black
    },
    sellerBlockHeader: {
        fontSize: 15,
        fontWeight: "bold",
        color: COLORS.secondary,
        marginBottom: 10
    },
    sellerVerificationGroupBlock: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 10
    },
    sellerVerficationPointerBG: {
        backgroundColor: COLORS.primary,
        padding: 10,
        borderRadius: 50,
        width: 38,
        alignItems: "center"
    },
    sellerVerficationPointerBgSmall: {
        backgroundColor: COLORS.primary,
        borderRadius: 20,
        width: 15,
        height: 15,
        alignItems: "center",
    },
    SellerVerificationPointerText: {
        marginTop: 10,
        marginLeft: 10
    },
    sellerVerificationBlockBGText: {
        color: COLORS.white
    },
    SellerVerificationPointerSmallText: {
        marginLeft: 10,
        color: COLORS.gray,
        fontSize: 10
    },
    SellerVerificationContentText: {
        fontSize: 12,
        marginBottom: 20
    },
    sellerVerificationStep2Title: {
        fontSize: 25,
        fontWeight: "bold",
        alignContent: "center"
    },
    sellerVerificationHeaderStep2: {
        marginHorizontal: 50,
        marginTop: 20,
        alignItems: "center"
    },
    sellerVerificationStepId2SubTitle: {
        fontSize: 14,
        color: COLORS.secondary,
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: COLORS.lightGreen,
        alignItems: "center",
        padding: 20
    },
    sellerVerificationInputGroup: {
        marginHorizontal: 30,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.sellerGoBackContainer
    },
    sellerVerificationInput: {
        fontFamily: "nunitoregular",
        marginTop: 20
    },
    sellerVerificationIdWrapper: {
        marginTop: 30,
    },
    sellerVerificationIdContainerActive: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      marginHorizontal: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: COLORS.primary

    },
    sellerVerificationIdGroup: {
        flex: 1,
        flexDirection: "row",
    },
    checkmark: {
        width: 20,
        height: 20
    },
    sellerVerificationIdContainer: {
      flex: 1,
      flexDirection: "row",
      marginHorizontal: 20,
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      marginTop: 10
    },
    sellerVerificationTipsHeaderContainer: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: 30,
        marginTop: 20
    },
    sellerVerificationTipsToolTipIcon: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        width: 30,
        height: 30
    },
    sellerVerificationToolTipEx: {
        color: COLORS.white,
        fontWeight: "bold"
    },
    sellerVerificationToolTipText: {
        justifyContent: "center",
        marginTop: 5,
        marginLeft: 10,
        fontSize: 15,
        fontWeight: "bold",
        color: COLORS.secondary
    },
    sellerVerificationTips: {
        marginHorizontal: 37,
        marginTop: 20
    },
    // Notification screen specific styles
    notificationHeaderContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        backgroundColor: 'white',
    },
    notificationHeaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 30,
    },
    notificationTabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#e1e1e1',
    },
    notificationTab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent', 
    },
    notificationActiveTab: {
        borderBottomColor: 'orange',
    },
    notificationTabText: {
        fontSize: 16,
        color: 'grey',
    },
    notificationActiveTabText: {
        color: 'orange',
        fontWeight: 'bold',
    },
    notificationAvatarStyle: {
        width: 40,
        height: 40,
        borderRadius: 20, 
        backgroundColor: '#95827a',
        marginRight: 12,
    },
    notificationItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
    notificationTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    notificationText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        flexShrink: 1,
    },
    notificationText2: {
        fontSize: 12,
        color: '#9a9a9a',
        flexShrink: 1,
    },
    notificationTime: {
        fontWeight: 'normal',
        position: 'absolute',
        right: 0,
        fontSize: 10,
        color: '#9a9a9a',
        marginTop: 4,
    },
    notificationAvatarStyle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#95827a',
        marginRight: 12,
    },
    productImagePlaceholder: {
    width: 50,
    height: 50, 
    backgroundColor: '#e0e0e0', 
    borderRadius: 5, 
    },
    messageItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        alignItems: 'center',
    },
    messageTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    messageText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        flexShrink: 1,
    },
    messageText2: {
        fontSize: 12,
        color: '#9a9a9a',
        flexShrink: 1,
    },
    messageTime: {
        fontWeight: 'normal',
        position: 'absolute',
        right: 0,
        fontSize: 10,
        color: '#9a9a9a',
        marginEnd:'10%',
    },
    productImagePlaceholder: {
        position: 'absolute',
        right:0,
        width: 50,
        height: 50,
        backgroundColor: '#e0e0e0',
    },
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: '90%',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 32,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 10,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginRight: -10,
        marginTop: -10,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 16,
    },
    inputLabel: {
        alignSelf: 'flex-start',
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
    },
    input: {
        width: '100%',
        borderColor: '#DDD',
        borderWidth: 1,
        borderRadius: 8,
        padding: 16,
        fontSize: 18,
        color: '#333',
    },
    sendButton: {
        backgroundColor: '#FF9500',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 8,
        width: '100%',
        marginTop: 16,
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 18,
    },
    makeOfferContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginVertical: 16,
    },
    makeOfferButton: {
        backgroundColor: 'white',
        borderColor: '#310D00',
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24, 
    },
    makeOfferSelectedButton: {
        backgroundColor: '#FFF3E0',
        borderColor: '#FF9500', 
    },
    button: {
        backgroundColor: 'white',
        borderColor: '#310D00',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 30,
    },
    subText:{
        color: '#666',
        fontSize: 12,
        textAlign:'left',
        alignSelf: 'flex-start',
    },
    selectedButton: {
        borderColor: 'orange',
    },
    buttonText: {
        color: 'black', 
        textAlign: 'center',
    },
    disclaimerText: {
        fontSize: 14,
        color: '#666',
        marginTop: 16, 
        textAlign: 'center', 
    },
    confirmationMessage: {
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
        marginVertical: 5,
    },
    //report listing style
    reportListingCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    reportListingModalView: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 20, 
        padding: 35, 
        alignItems: 'flex-start', 
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    reportListingCloseButton: {
        position: 'absolute', 
        top: 10, 
        right: 10, 
        padding: 10,
    },
    reportListingCloseButtonText: {
        fontSize: 24, 
        fontWeight: 'bold',
    },
    modalTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20,
        color: '#333',
        alignSelf: 'center', 
    },
    modalInput: {
        width: '100%',
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
    },
    modalInputMultiline: {
        minHeight: 100, 
        textAlignVertical: 'top',
    },
    submitButton: {
        backgroundColor: '#310D00', 
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignSelf: 'center', 
        width: '100%', 
        marginTop: 20, 
    },
    submitButtonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    reportListingCloseText: {
        fontSize: 20,
        color: '#333',
    },
    reportListingContent: {
        alignItems: 'center',
    },
    reportListingHeader: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 10,
    },
    reportListingCheckmarkCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    reportListingCheckmark: {
        color: 'white',
        fontSize: 30,
    },
    reportListingBody: {
        fontSize: 14,
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    reportListingLearnMore: {
        fontSize: 14,
        color: 'orange',
        textDecorationLine: 'underline',
    },
    //report success style
    reportCenteredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    reportModalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    reportCloseButton: {
        alignSelf: 'flex-end',
    },
    reportContent: {
        alignItems: 'center',
    },
    reportTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
    },
    reportMessage: {
        fontSize: 14,
        color: '#333',
        marginTop: 10,
        textAlign: 'center',
    },
    reportCodeOfConduct: {
        marginTop: 10,
        color: '#007AFF',
        textDecorationLine: 'underline',
    },
    buudlProtectionButton: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buudlProtectionButtonText: {
        color: 'white',
        fontSize: 16,
    },
    buudlProtectionModalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buudlProtectionContainer: {
        width: '90%',
        height:'90%',
        backgroundColor: 'white',
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    buudlProtectionScrollView: {
        padding: 20,
    },
    buudlProtectionHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buudlProtectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    buudlProtectionSubTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
    },
    buudlProtectionDescription: {
        fontSize: 16,
        color: 'grey',
        marginTop: 5,
    },
    buudlProtectionContentText: {
        fontSize: 16,
        marginTop: 5,
    },
    buudlProtectionListItem: {
        fontSize: 16,
        marginLeft: 10,
        marginTop: 5,
    },
    buudlProtectionFooterNote: {
        fontSize: 16,
        marginTop: 5,
        marginBottom: 10,
        color: 'grey',
    },
    buudlProtectionFooter: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buudlProtectionFooterText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 10,
    },
    buudlProtectionButtonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buudlProtectionButton: {
        backgroundColor: '#e7e7e7',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    buudlProtectionButtonText: {
        fontSize: 16,
        color: '#000',
    },
    buudlProtectionCloseButton: {
        padding: 10,
    },
    //offer message
    listContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    offerMessageItem: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        alignItems: 'center',
    },
    offerProductImagePlaceholder: {
        width: 60,
        height: 60,
        backgroundColor: '#e4e4e4',
        marginRight: 10,
    },
    offerMessageTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    offerMessageText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    offerMessageText2: {
        fontSize: 14,
        color: '#555',
    },
    offerMessageTime: {
        fontSize: 12,
        color: '#aaa',
        marginTop: 4,
    },
    //inbox style
    inboxContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    inboxHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        paddingHorizontal:25,
        marginTop:60,
    },
    inboxHeaderTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inboxSegmentedControlContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
    },
        inboxSegmentButton: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
    },
    inboxSegmentButtonActive: {
        backgroundColor: '#F86F03',
    },
    inboxSegmentButtonText: {
        fontSize: 14,
        color: '#000',
    },
    inboxSegmentButtonTextActive: {
        color: '#fff',
    },
    inboxTabsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    inboxTab: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent', 
        paddingHorizontal: 20,
    },
    inboxActiveTab: {
        borderBottomWidth: 2,
        borderBottomColor: '#310D00',
    },
    inboxTabText: {
        fontSize: 16,
        color: '#000',
    },
    inboxActiveTabText: {
        fontWeight: 'bold',
        color: '#310D00',
    },
    camera: {
        flex: 1,
        margin: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
        marginBottom: 200
    },
    cameraButtonContainer: {
        padding: 20,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: 400,
        height: 200
    },
    reverseCameraButton: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: "flex-end",
    },
    cameraContainer: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.white,
    },
    sellerRegistrationPageContainerBG: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "rgba(49, 13, 0, .3)"
    },
    sellerContinueBtnBrown: {
        alignItems: "center",
        width: "90%",
        paddingVertical: 20,
        backgroundColor: COLORS.brown,
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 150
    },
    sellerFooterContainerBrn: {
        marginTop: 60,
        alignItems: "center",
        marginBottom: 100
    },
    sellerVerificationStep5Title: {
        fontSize: 25,
        fontWeight: "bold",
        alignContent: "center",
        color: COLORS.white,
        marginBottom: 40,
    },
    sellerVerificationStep5SubTitle: {
        fontSize: 16,
        fontWeight: "bold",
        alignContent: "center",
        color: COLORS.white,
        marginBottom: 10,
    },
    photoTips: {
        flex: 1,
        margin: 20,
        borderRadius: 20,
        padding: 20,
        backgroundColor: "rgba(49, 13, 0, .3)"
    },
    photoTipsHeaderContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    photoTipsHeaderText: {
        color: COLORS.white,
        fontSize: 16
    },
    tipsListContainer: {
        marginLeft: 43
    },
    tipsListText: {
        color: COLORS.white,
        fontSize: 12
    },
    sellerVerificationStep2SubTitle: {
        fontSize: 15,
        fontWeight: "bold",
        alignContent: "center",
        marginTop: 20,
        marginBottom: 30,
    },
    selfieCameraContainer: {
        borderRadius: 150, // Set borderRadius to half of width and height to make it a circle
        overflow: 'hidden',
    },
    selfieCamera: {
        flex: 1,
        aspectRatio: 1,
    },
    applicationReviewContainer: {
        marginTop: 50,
        marginHorizontal: 30
    },
    reviewApplicationTextHeader: {
        fontWeight: "bold"
    },
    informationContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 10
    },
    finalizeApplicationContainer: {
        flex: 1,
        marginTop: 50,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    dropDownStyle: {
        borderWidth: 1,
        borderColor: COLORS.black
    },
});

export default globalStyles;