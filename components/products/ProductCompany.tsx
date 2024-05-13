import React from 'react'
import {View,Text, Image} from 'react-native'
import globalStyles from '../../constants/global.styles'
const ProductCompany = ({name,imageUrl,city}) => {
  return (
    <View style={globalStyles.productCompanyContainer}>
        <Image source={{uri:imageUrl}} style={globalStyles.productCompanyImage} />
        
        <View>
            <Text style={globalStyles.productCompanyName}>{name}</Text>
            <Text style={globalStyles.productCompanyCity}>{city}</Text>
        </View>
    </View>
  )
}

export default ProductCompany