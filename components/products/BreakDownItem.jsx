import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import globalStyles from '../../constants/global.styles'

const BreakDownItem = ({name,value}) => {
  return (
    <View style={globalStyles.breakDownContainer}>
      <Text style={[globalStyles.title,{marginLeft:5,fontSize:16,},name=="Total Payment"&&{fontWeight:'bold',marginBottom:15,}]}>{name}</Text>
      <Text style={[globalStyles.titleMedium,{marginLeft:5,fontSize:16}]}>{value}</Text>
    </View>
  )
}

export default BreakDownItem

const styles = StyleSheet.create({})