import { FlatList, Image, StyleSheet, Text, View, Dimensions  } from 'react-native'
import React from 'react'
import { alignCenter, flexBox, heading2, justifyBetween } from '../../assets/style'

const { width } = Dimensions.get('window');

const data = [
    { 
        id: '1',
        title: 'Gucci Designer Black Dress Size M',
        image:  require('../../assets/img/similar-product-1.png'),
        price: '$38',
        buy: 'Buy Now'
    },
    { 
        id: '2', 
        title: 'Nintendo DX 1994 Working + 2Cartridges',
        image:  require('../../assets/img/similar-product-2.png'),
        price: '$40',
        buy: 'Rent Now'
    },
    { 
        id: '3', 
        title: 'Gucci Designer Black Dress Size M',
        image:  require('../../assets/img/similar-product-1.png'),
        price: '$47',
        buy: 'Buy Now'
    },
    { 
        id: '4', 
        title: 'Nintendo DX 1994 Working + 2Cartridges',
        image:  require('../../assets/img/similar-product-2.png'),
        price: '$40',
        buy: 'Rent Now'
    },
    { 
        id: '5', 
        title: 'Nintendo DX 1994 Working + 2Cartridges',
        image:  require('../../assets/img/similar-product-2.png'),
        price: '$40',
        buy: 'Rent Now'
    },
    { 
        id: '6', 
        title: 'Gucci Designer Black Dress Size M',
        image:  require('../../assets/img/similar-product-1.png'),
        price: '$37',
        buy: 'Buy Now'
    },
  ]; 


const RelatedProducts = () => {
    const renderCard = ({ item, index  }) => (
        <View style={[styles.card, index === data.length - 1 && styles.lastCard ]}>
            <View style={styles.ImageBox} >
                <Image
                    source={item.image}
                    style={styles.Image}
                />
            </View>
            <View style={styles.cardDetail} >
                <Text style={styles.Title} >{item.title}</Text>
                <View style={[flexBox, justifyBetween, alignCenter, styles.CardInfo]} >
                    <Text style={styles.Price} >
                        {item.price}
                    </Text>
                    <View style={styles.BuyNowBox} >
                        <Text style={styles.BuyNow} >
                            {item.buy}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );

  return (
    <View style={styles.OtherProductsBox} >
      <Text style={heading2} >Related Products</Text>
      <FlatList
       data={data}
       horizontal={false}
       numColumns={2}
       renderItem={renderCard}
       keyExtractor={(item) => item.id}
       style={styles.flatBox}
       showsHorizontalScrollIndicator={false}
       snapToInterval={width / 2} 
      decelerationRate="fast"
       />
    </View>
  )
}

export default RelatedProducts

const styles = StyleSheet.create({
    OtherProductsBox:{
        paddingHorizontal: 22,
        paddingVertical: 20,
    },
    card:{
        borderWidth: 1,
        borderColor: '#DFDFDF',
        marginHorizontal: 5,
        marginVertical: 8,
        width: width / 2 - 32,
        borderRadius: 15,
    },
    lastCard: {
        marginRight: 10,
    },
    flatBox:{
        marginHorizontal: -22,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
        display: "flex",
    },
    cardDetail:{
        paddingHorizontal: 13,
        paddingVertical: 7,
    },
    ImageBox:{
        width: '100%'
    },
    Image:{
        width: '100%',
        objectFit: 'cover',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    Title:{
        fontSize: 12,
        fontWeight: '500',

    },
    CardInfo:{
        marginVertical: 10,
    },
    Price:{
        color: '#8E00DB',
        fontSize: 14,
        fontWeight: '600'
    },
    BuyNowBox:{
        paddingVertical: 4,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#DFDFDF',
    },
    BuyNow:{
        fontSize: 11,
        fontWeight: '500'
    }
})