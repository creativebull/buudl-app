import { Dimensions } from "react-native";
const { height, width } = Dimensions.get('window');

const COLORS = {
    primary: "#F86F03",
    secondary: "#310D00",
    tertiary: "#CCCE6D",
    
    gray: "#83829A",
    gray2: "#dfe6e9",

    offWhite: "#F3F4f8",
    white: "#FFFFFF",
    red: "#e81e4d",
    green: "#00C135",
    lightWhite: "#FAFAFC",
    lightYellow: "#F5EDD0",
    lightBrown: "#701D00",
    lightGreen: "#CCCE6D",
    brown: "#310D00",

    pink: "#FB9EBB",
    violet: "#CBB3F8",

    black: "#000000"
};

const SIZES = {
    xSmall: 10,
    small: 12,
    meduim: 16,
    large: 20,
    xLarge: 24,
    height,
    width
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
    medium: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      }  
    }
};

export { COLORS, SIZES, SHADOWS };