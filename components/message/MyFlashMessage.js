// import { fonts } from "@/config/fonts";ss
import React from "react";
import {Platform} from 'react-native'
import FlashMessage from "react-native-flash-message";
// import { getFontFamily } from "@/config/fonts";
const MyFlashMessage = ({ innerRef, ...rest }) => {
  // const fonts = getFontFamily('')
  return (
    <FlashMessage
    style={{marginHorizontal:'10%', borderRadius:10, paddingTop:0,  }} //marginTop:-10
      {...(innerRef && { ref: innerRef })}
      position="top"
      textStyle={{
        textAlign: "left",
        fontSize: 12,
        // fontFamily: fonts.medium,
        // lineHeight:  Platform.isPad ? 24 : 24,
        marginTop:0,
        paddingVertical:0,
      }}
      titleStyle={{
        textAlign: "left",
        fontSize: 14,
        // fontFamily: fonts.medium,
        // lineHeight: Platform.isPad ? 28 : 19,
        marginTop:Platform.OS == 'ios'?-14:4,
        paddingVertical:0,
      }}
      {...rest}
    />
  );
};

export default MyFlashMessage;
