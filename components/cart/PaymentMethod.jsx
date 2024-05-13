import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import globalStyles from '../../constants/global.styles'
import { Ionicons, Feather } from "@expo/vector-icons";

const PaymentMethod = ({paymentMethod,setPaymentMode,paymentMode,value}) => {
 const handleCheckBox = () =>{
  setPaymentMode(value);
 }
  return (
    <TouchableOpacity style={globalStyles.paymentMethodContainer} onPress={handleCheckBox}>
      <View style={globalStyles.checkmarkContainer}>
      <Ionicons name={value===paymentMode  && "checkmark-sharp"} size={16} style={{marginTop:-2,}}/>
      </View>
      <Text style={[globalStyles.title,{marginLeft:5,fontSize:16,}]}>{paymentMethod}</Text>
    </TouchableOpacity>
  )
}

export default PaymentMethod

const styles = StyleSheet.create({})