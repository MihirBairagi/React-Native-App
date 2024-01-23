import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const ProductBanner = () => {
  return (
    <View style={[ styles.ProductBannerBox]} >
      <Image
            source={require('../../assets/img/product-banner.png')}
            style={styles.ProductImage}
      />
        <View style={styles.likeBox} >
            <Image
                source={require('../../assets/img/heart.png')}
                style={styles.likeIcon}
            />
        </View>
    </View>
  )
}

export default ProductBanner

const styles = StyleSheet.create({
    ProductImage:{
        width: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

    },
    ProductBannerBox:{
        width: '100%',
        position: 'relative'
    },
    likeBox:{
        position: 'absolute',
        right: '7%',
        top: '5%',
        backgroundColor: 'white',
        padding: 12,
        borderRadius: 100,
    }
})