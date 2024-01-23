import { FlatList, Image, StyleSheet, Text, View, Dimensions  } from 'react-native'
import React from 'react'
import { alignCenter, flexBox, heading2, justifyBetween } from '../../assets/style'

const { width } = Dimensions.get('window');

const data = [
    { 
        id: '1',
        title: 'Explore 1000+',
        boldTitle: 'Products On Rent',
        subTitle: 'Buy Or Rent Products ',
        boldSubTitle: 'Free Shipping Month',
        backgroundColor: '#F690FF'
    },
    { 
        id: '2',
        title: 'Explore 1000+',
        boldTitle: 'Products On Rent',
        subTitle: 'Buy Or Rent Products ',
        boldSubTitle: 'Free Shipping Month',
        backgroundColor: '#74E9F8'
    },
    { 
        id: '3',
        title: 'Explore 1000+',
        boldTitle: 'Products On Rent',
        subTitle: 'Buy Or Rent Products ',
        boldSubTitle: 'Free Shipping Month',
        backgroundColor: '#F690FF'
    },
    { 
        id: '4',
        title: 'Explore 1000+',
        boldTitle: 'Products On Rent',
        subTitle: 'Buy Or Rent Products ',
        boldSubTitle: 'Free Shipping Month',
        backgroundColor: '#74E9F8'
    },
   
   
  ]; 


const ProductUSP = () => {

    const renderCard = ({ item, index  }) => (
        <View style={[styles.card, index === data.length - 1 && styles.lastCard ]}>
           
            <View style={[styles.cardDetail,  {backgroundColor: item.backgroundColor}]} >
                <Text style={styles.Title} >{item.title}</Text>
                <Text style={styles.BoldTitle} >{item.boldTitle}</Text>
                <Text style={styles.SubTitle} >{item.subTitle}</Text>
                <Text style={styles.BoldSubTitle} >{item.boldSubTitle}</Text>
                
            </View>
        </View>
    );

  return (
    <View style={styles.OtherProductsBox} >
      <FlatList
       data={data}
       horizontal={true}
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

export default ProductUSP

const styles = StyleSheet.create({
    OtherProductsBox:{
        paddingHorizontal: 22,
        paddingVertical: 20,
    },
    card:{
        marginRight: 15,
        width: width / 1 - 75,
    },
    flatBox:{
        marginHorizontal: -22,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 10,
    },
    cardDetail:{
        paddingHorizontal: 20,
        paddingVertical: 38,
        borderRadius: 20,
    },
    Title: {
        fontSize: 28,
    },
    BoldTitle:{
        fontWeight: '800',
        textTransform: 'uppercase',
        fontSize: 24,
        marginBottom: 20,
    },
    SubTitle:{
        fontSize: 18,
        marginBottom: 2,
    },
    BoldSubTitle:{
        fontSize: 18,
        fontWeight: '600'
    }
})