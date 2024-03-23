import { StyleSheet } from "react-native";
import { COLORS, SIZES, SHADOWS } from "./index";

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
    }
});

export default globalStyles;