import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { alignCenter, flexBox, heading1, justifyBetween, paragraph, subTitle } from '../../assets/style'

const ProductInfo = () => {
  return (
    <View style={[styles.ProductInfoBox]} >
      <View style={[flexBox, justifyBetween, alignCenter]} >
        <View style={[styles.ProductCategoryBox]} >
            <Text style={[subTitle, styles.ProductCategory]} >
                Texas University
            </Text>
        </View>
        <View style={[styles.ShareIconBox]} >
            <Image
                source={require('../../assets/img/share.png')}
                styles= {styles.ShareIcon}
            />
        </View>
      </View>
      <Text style={[heading1, styles.ProductName]} >
        White Bike Shoes For Men Size UK 11
      </Text>
      <View style={[flexBox, justifyBetween, alignCenter]}  >
        <Text style={[heading1, styles.Price]} >
            $120
        </Text>
        <View style={[styles.DealBox]} >
            <Text style={[styles.Deal]} >
                Deal Now
            </Text>
        </View>
      </View>
      <View style={[styles.SellerBox, flexBox, justifyBetween, alignCenter]} >
        <View style={styles.TextBox} >
            <Text style={subTitle} >
                Seller Is In A Different Area
            </Text>
            <Text style={[paragraph, styles.SellerPara]} >
                Request Seller To Enable Shipping
            </Text>
        </View>
        <View style={[styles.ShareIconBox]} >
            <Image
                source={require('../../assets/img/share-2.png')}
                styles= {styles.ShareIcon}
            />
        </View>
      </View>
    </View>
  )
}

export default ProductInfo

const styles = StyleSheet.create({
    ProductInfoBox:{
        paddingHorizontal: 30,
        paddingTop: 40,
        paddingBottom: 15,
        backgroundColor: '#F8F7FF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -235,
    },
    ProductCategoryBox:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#EBE9F4',
    },
    ProductCategory:{
        color: "#8E00DB",
        fontWeight: '700',
    },
    ShareIconBox:{
        backgroundColor: '#8E00DB',
        padding: 7,
        borderRadius: 30,
    },
    ProductName:{
        marginTop: 20,
        marginBottom: 30,
    },
    Price:{
        fontWeight: '700',
        fontSize: 25,
    },
    DealBox:{
        borderWidth: 2,
        borderColor: '#FFAF5E',
        paddingHorizontal: 25,
        paddingVertical: 8,
        borderRadius: 30,
    },
    Deal:{
        fontSize: 14,
        color: '#8E00DB',
        fontWeight: '600'
    },
    SellerPara:{
        fontWeight:'500',
        marginTop: 2,
    },
    SellerBox:{
        borderTopWidth: 2,
        borderColor:'#E0DEEB',
        paddingVertical: 18,
        marginTop: 20,
    }

})