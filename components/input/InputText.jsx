import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import globalStyles from '../../constants/global.styles'

const InputText = ({label,value,onChange}) => {
  return (
    <View style={globalStyles.textInputContainer}>
        <Text style={globalStyles.titleGray}>{label}</Text>
        <TextInput style={globalStyles.textInput} value={value} onChangeText={onChange} />
    </View>
  )
}

export default InputText

const styles = StyleSheet.create({})