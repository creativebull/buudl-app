import isObject from "lodash/isObject";
import isArray from "lodash/isArray";
import { showMessage as showMessageRNFM } from "react-native-flash-message";
import {Platform} from 'react-native'
// import { fonts } from "@/config/fonts";
// import { getFontFamily } from "@/config/fonts";
export function showMessage(props) {
  const options = isObject(props) && !isArray(isArray) ? props : {};
  const { type, textStyle, titleStyle, ...rest } = options;
  const backgroundColor =
    type === "danger"
      ? 'red'
      : type === "warning"
      ? 'yellow'
      : type === "success"
      ? 'green'
      : 'blue';
  showMessageRNFM({
    backgroundColor,
    color: 'white',
    ...rest,
    type: type || "default",
    textStyle: [
      {
        fontSize: 12,
        // fontFamily:fonts.medium,
        // lineHeight:  Platform.isPad ? 24 : 24,
      },
      textStyle && textStyle,
    ],
    titleStyle: [
      {
        textAlign: "left",
        fontSize: 14,
        // fontFamily:fonts.medium,
        // lineHeight: Platform.isPad ? 28 : 19,
        marginTop:Platform.OS == 'ios'?-27:4,
        paddingTop:0
      },
      titleStyle && titleStyle,
    ],
    style:{ marginHorizontal:'10%', borderRadius:10,  marginTop:Platform.OS == 'ios'? '11%':40, paddingTop:0} //height:70,
  }
  );
}

