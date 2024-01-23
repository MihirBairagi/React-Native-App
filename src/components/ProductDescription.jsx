import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { alignCenter, flexBox, heading2, justifyBetween, paragraph, subTitle } from '../../assets/style'

const ProductDescription = () => {
  return (
    <View style={styles.ProductDescriptionBox} >
      <Text style={[heading2]} >Description</Text>
      <Text style={[paragraph]} >
        Used only around 5 to 6 times & I purchased it for my online classes but now I am not taking them so I want to sold them out.
      </Text>
      <View style={[flexBox, alignCenter]}>
        <View style={styles.DescriptionTabBox} >
            <Text style={[subTitle, styles.DescriptionTab]} >
                Need money
            </Text> 
        </View>
        <View style={styles.DescriptionTabBox} >
            <Text style={[subTitle, styles.DescriptionTab]} >
              Buy New Product
            </Text> 
        </View>
        <View style={styles.DescriptionTabBox} >
            <Text style={[subTitle, styles.DescriptionTab]} >
                Urgent sell
            </Text> 
        </View>
      </View>
      <View style={[flexBox, alignCenter, justifyBetween, styles.ProductInfoTabBox]} >
        <View style={styles.ProductInfoTab} >
          <Text style={[paragraph, styles.ProductInfoTabText]}>
            Size
          </Text>
          <Text style={[subTitle, styles.ProductInfoTabSubText]} >
            UK 11
          </Text>
        </View>
        <View style={styles.ProductInfoTab} >
          <Text style={[paragraph, styles.ProductInfoTabText]}>
            Color
          </Text>
          <Text style={[subTitle, styles.ProductInfoTabSubText]} >
            White
          </Text>
        </View>
        <View style={styles.ProductInfoTab} >
          <Text style={[paragraph, styles.ProductInfoTabText]}>
            Condition 
          </Text>
          <Text style={[subTitle, styles.ProductInfoTabSubText]} >
            Good
          </Text>
        </View>
        <View style={styles.ProductInfoTab} >
          <Text style={[paragraph, styles.ProductInfoTabText]}>
            Brand
          </Text>
          <Text style={[subTitle, styles.ProductInfoTabSubText]} >
            Nike
          </Text>
        </View>
        <View style={styles.ProductInfoTab} >
          <Text style={[paragraph, styles.ProductInfoTabText]}>
            For
          </Text>
          <Text style={[subTitle, styles.ProductInfoTabSubText]} >
            Man
          </Text>
        </View>
        <View style={styles.ProductInfoTab} >
          <Text style={[paragraph, styles.ProductInfoTabText]}>
            Category
          </Text>
          <Text style={[subTitle, styles.ProductInfoTabSubText]} >
            Footwear
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ProductDescription

const styles = StyleSheet.create({
    ProductDescriptionBox:{
        paddingHorizontal: 22,
        paddingVertical: 35,
    },
    DescriptionTabBox:{
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#EBE9F4',
        marginTop: 28,
        marginBottom: 25,
        marginRight: 8,
    },
    DescriptionTab:{
      textTransform: 'capitalize',
      fontSize: 11,
    },
    ProductInfoTabText:{
      fontWeight:'500',
      marginBottom: 2,
    },
    ProductInfoTab:{
      paddingHorizontal: 12,
      paddingVertical: 10,
      width: '31.5%',
      borderWidth: 1,
      borderColor: '#EBE9F4',
      borderRadius: 10,
      marginBottom: 10,
    },
    ProductInfoTabBox:{
      flexWrap: 'wrap'
    }
})