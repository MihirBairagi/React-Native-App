import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heading1, heading2, heading3, paragraph, flexBox, alignCenter, justifyBetween, subTitle } from '../../assets/style'

const Header = () => {
  return (
    <View style={[styles.headerBox, flexBox, justifyBetween, alignCenter] } >   
      <View style={[flexBox, alignCenter ]} >
        <View style={[styles.userIconBox]} >
            <Image
                source={require('../../assets/img/user-dp.png')}
                style={styles.userIcon}
            />
        </View>
        <View style={[styles.userDetail]} >
            <Text style={[styles.userName]} >
                Jason Smith
            </Text>
            <Text style={[subTitle]} >
                Southern Methodist University
            </Text>
        </View>
      </View>
      <View style={[flexBox, alignCenter ]} >
        <View style={[styles.notificationIconBox]} >
            <Image
                source={require('../../assets/img/notification.png')}
                style={styles.notificationIcon}
            />
        </View>
        <View style={[styles.menuIconBox]} >
            <Image
                source={require('../../assets/img/nav.png')}
                style={styles.navIcon}
            />
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    
    headerBox:{
        paddingHorizontal:15,
        paddingVertical:12,
        // paddingTop:40,
        backgroundColor: 'white'
    },
    userIcon:{
        objectFit: "contain",
        marginRight: 13
    },
    userName:{
        fontSize: 20,
        fontWeight: 500
    },
    notificationIcon:{
        marginRight: 20,
        width: 18,
        objectFit: 'contain'
    },
    navIcon:{
        width: 21,
        objectFit: 'contain'
    }
})