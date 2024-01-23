import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { alignCenter, flexBox, heading2, heading3, justifyBetween, paragraph, subTitle } from '../../assets/style'

const SellerInformation = () => {
  return (
    <View style={styles.SellerInformationBox} >
      <Text style={heading2} >Seller Information</Text>
      <View style={[styles.SellerInfoBox, flexBox, alignCenter ]} >
        <View style={styles.SellerIconBox} >
            <Image
                source={require('../../assets/img/seller-image.png')}
                style={styles.SellerImage}
            />
        </View>
        <View style={styles.SellerInfo} >
            <Text style={[heading3]} >
                Jennifer Adams
            </Text>
            <Text style={[subTitle]} >
                Texas University
            </Text>
            <View style={[styles.SellerQuote, flexBox, alignCenter]} >
                <Image
                    source={require('../../assets/img/clap.png')}
                    style={styles.Claps}
                />
                <Text style={styles.Quote} >
                    “bravo, the seller is from your college”
                </Text>
            </View>
        </View>
      </View>
      <Text style={paragraph} >
        Used only around 5 to 6 times & I purchased it for my online classes but now I am not taking them so I want to sold them out.
      </Text>
      <View style={[styles.SellerTagsList, flexBox, alignCenter]} >
        <View style={[styles.SellerTagBox]} >
            <Text style={[styles.SellerTag]} >Member Of Basket Ball Community</Text>
        </View>
        <View style={[styles.SellerTagBox]} >
            <Text style={[styles.SellerTag]} >Top Seller Of The Month </Text>
        </View>
        <View style={[styles.SellerTagBox]} >
            <Text style={[styles.SellerTag]} >Verified Account </Text>
        </View>
        <View style={[styles.SellerTagBox]} >
            <Text style={[styles.SellerTag]} >Recommended Rumie User</Text>
        </View>
      </View>
      <View style={[styles.MeetupBox, flexBox, alignCenter, justifyBetween ]} >
        <View style={[styles.MeetUpTextBox, flexBox]} >
            <Text style={[styles.MeetUpText, styles.underline, heading3]} >
                Deal 
            </Text>
            <Text style={[styles.MeetUpText, heading3]} >
                Before
            </Text>
            <Text style={[styles.MeetUpText, heading3]} >
                Its Sold Out!
            </Text>
        </View>
        <View style={styles.MeetUpBtn} >
            <Text style={styles.RequestMeetUp} >
                Request Meetup
            </Text>
        </View>
      </View>
    </View>
  )
}

export default SellerInformation

const styles = StyleSheet.create({
    SellerInformationBox:{
        marginHorizontal: 20,
        marginVertical: 30,
        paddingHorizontal: 20,
        paddingVertical: 25,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#CFC9DF',
    },
    SellerInfoBox:{
        marginTop: 12,
        marginBottom: 18,
    },
    SellerIconBox:{
        marginRight: 12,
    },
    SellerQuote:{
        marginTop: 15,
    },
    Quote:{
        fontSize: 10,
        marginLeft: 2,
        textTransform: 'capitalize'
    },
    SellerTagsList:{
        marginVertical: 20,
        flexWrap: 'wrap'
    },
    SellerTagBox:{
        paddingVertical: 7,
        paddingHorizontal: 8,
        backgroundColor: '#F8F7FF',
        borderRadius: 30,
        marginRight: 5,
        marginBottom: 8,
    },
    SellerTag:{
        fontSize: 10
    },
    MeetUpTextBox:{
        width: '50%',
        flexWrap: 'wrap'
    },
    underline:{
        color: '#8E00DB',
        textDecorationLine: 'underline',
        textDecorationColor: '#FFAF5E',
        marginRight: 5,
    },
    MeetUpBtn:{
        paddingVertical: 9,
        paddingHorizontal: 18,
        borderWidth: 2,
        borderColor: '#FFAF5E',
        borderRadius: 30,
    },
    RequestMeetUp:{
        color: '#8E00DB',
        fontSize: 15,
        fontWeight: '600',
    }
})