import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header';
import { FlatList } from 'react-native';
import ProductBanner from '../components/ProductBanner';
import ProductInfo from '../components/ProductInfo';
import ProductDescription from '../components/ProductDescription';
import HowItWorks from '../components/HowItWorks';
import SellerInformation from '../components/SellerInformation';
import OtherProducts from '../components/OtherProducts';
import ProductUSP from '../components/ProductUSP';
import RelatedProducts from '../components/RelatedProducts';
import FeaturedCategory from '../components/FeaturedCategory';
import { flexBox, justifyBetween } from '../../assets/style';
import AskQuestion from '../components/AskQuestion';

const ProductDetail = () => {
    const data = [
        { key: 'ProductBanner', component: <ProductBanner /> },
        { key: 'ProductInfo', component: <ProductInfo/> },
        { key: 'ProductDescription', component: <ProductDescription/> },
        { key: 'HowItWorks', component: <HowItWorks/> },
        { key: 'AskQuestion', component: <AskQuestion/> },
        { key: 'SellerInformation', component: <SellerInformation/> },
        { key: 'OtherProducts', component: <OtherProducts/> },
        { key: 'ProductUSP', component: <ProductUSP/> },
        { key: 'RelatedProducts', component: <RelatedProducts/> },
        { key: 'FeaturedCategory', component: <FeaturedCategory/> },
      ];

  return (
    <View style={styles.ProductDetailScreen} >
      <FlatList
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => item.component}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Header />}
        stickyHeaderIndices={[0]} 
      />
      <ImageBackground
       source={require('../../assets/img/bg.png')}
       style={styles.FooterBox}
       resizeMode="contain"
      >
        
        <View style={[styles.FooterListing, flexBox, justifyBetween ]} >
          <View style={styles.MenuBox} >
            <Image
              source={require('../../assets/img/menu-1.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.Menu} >Home</Text>
          </View>
          <View style={styles.MenuBox} >
            <Image
              source={require('../../assets/img/menu-2.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.Menu} >Backpack</Text>
          </View>
          <View style={[styles.MenuBox, styles.MenuAdBox]} >
            <Image
              source={require('../../assets/img/ad.png')}
              style={styles.menuAdIcon}
            />
            <Text style={styles.Menu} >List Item</Text>
          </View>
          <View style={styles.MenuBox} >
            <Image
              source={require('../../assets/img/menu-3.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.Menu} >Messages</Text>
          </View>
          <View style={styles.MenuBox} >
            <Image
              source={require('../../assets/img/menu-4.png')}
              style={styles.menuIcon}
            />
            <Text style={styles.Menu} >Search</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  FooterBox:{
    position: 'absolute',
    top: '84%',
    marginHorizontal: 10,
    marginVertical: 20,
    width: '97%',
    height: 100,
    paddingTop: 20,
  },
  FooterListing:{
    paddingLeft: 10,
    paddingRight: 25,
    paddingVertical: 10
  },
  menuIcon:{
    width: 20,
    height: 41,
    objectFit: 'contain',
  },
  menuAdIcon:{
    width: 70,
    height: 70,
    objectFit: 'contain'
  },
  MenuAdBox:{
    marginTop: -29,
    borderRadius: 50,
  },
  MenuBox:{
    display: 'flex',
    alignItems: 'center',
    width: '19%'
  },
  Menu:{
    fontSize: 12,
    color: '#fff',
  }
})