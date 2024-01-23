import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { flexBox, heading2, justifyBetween } from '../../assets/style'

const { width } = Dimensions.get('window');

const FeaturedCategory = () => {
  return (
    <View style={[styles.FeaturedCategoryBox]} >
      <Text style={[heading2]} >Shop From Featured Category </Text>
      <View style={[flexBox, justifyBetween, styles.Featuredlisting]} >
        <View style={[styles.FeaturedBox]} >
            <View style={[styles.imgBox]} >
                <Image
                    source={require('../../assets/img/featured-img-1.png')}
                    style={styles.Image}
                />
            </View>
            <Text style={styles.title} >Clothing & Apparels</Text>
        </View>
        <View style={[styles.FeaturedBox]} >
            <View style={[styles.imgBox]} >
                <Image
                    source={require('../../assets/img/featured-img-2.png')}
                    style={styles.Image}
                />
            </View>
            <Text style={styles.title} >Sports Equipment</Text>
        </View>
        <View style={[styles.FeaturedBox, styles.marginTop]} >
            <View style={[styles.imgBox]} >
                <Image
                    source={require('../../assets/img/featured-img-3.png')}
                    style={styles.Image}
                />
            </View>
            <Text style={styles.title} >Electronic Gadgets</Text>
        </View>
        <View style={[styles.FeaturedBox]} >
            <View style={[styles.imgBox]} >
                <Image
                    source={require('../../assets/img/featured-img-4.png')}
                    style={styles.Image}
                />
            </View>
            <Text style={styles.title} >All Products</Text>
        </View>
      </View>
    </View>
  )
}

export default FeaturedCategory

const styles = StyleSheet.create({
    FeaturedCategoryBox:{
        paddingHorizontal: 22,
        paddingVertical: 20,
    },
    Featuredlisting:{
        flexWrap: 'wrap',
        marginTop: 15,
        marginBottom: 100,
    },
    marginTop:{
        marginTop: -80,
    },
    imgBox:{
        position:'relative',
        width: width / 2 - 32,
        overflow: 'hidden',
        borderRadius: 15,
    }, 
    

    title:{
        position: 'absolute',
        top: '8%',
        left: '12%',
        fontSize: 15,
        fontWeight: '600',
        width: '70%',
        lineHeight: 22, 
    },
    FeaturedBox:{
        marginBottom: 20,
    }
})