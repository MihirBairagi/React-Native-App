import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { alignCenter, flexBox, heading2, justifyBetween, paragraph, subTitle } from '../../assets/style'

const HowItWorks = () => {
  return (
    <View style={styles.HowItWorksBox} >
        <View style={[styles.HeadBox, flexBox, justifyBetween, alignCenter]} >
            <Text style={heading2} >How It Works</Text>
            <View style={styles.DealNowBox} >
                <Text style={[subTitle, styles.DealNow ]} >
                    Deal Now
                </Text>
            </View>
        </View>
        <Text style={paragraph} >
            Used only around 5 to 6 times & I purchased it for my online classes.
        </Text>
        <View style={[styles.WorkBoxList, flexBox, justifyBetween]} >
            <View style={[styles.WorkBox, styles.red]} >
                <View style={[styles.IconBox]} >
                    <Image
                         source={require('../../assets/img/work-icon-1.png')}
                         styles= {styles.WorkIcon}
                         resizeMode="cover"
                    />
                </View>
                <Text style={[styles.WorkText]} >
                    Decide A Meetup Time
                </Text>
            </View>
            <View style={[styles.WorkBox, styles.green]} >
                <View style={[styles.IconBox]} >
                    <Image
                         source={require('../../assets/img/work-icon-2.png')}
                         styles= {styles.WorkIcon}
                         resizeMode="cover"
                    />
                </View>
                <Text style={[styles.WorkText]} >
                    decide a Safe location
                </Text>
            </View>
            <View style={[styles.WorkBox, styles.blue]} >
                <View style={[styles.IconBox]} >
                    <Image
                         source={require('../../assets/img/work-icon-3.png')}
                         styles= {styles.WorkIcon}
                         resizeMode="cover"
                    />
                </View>
                <Text style={[styles.WorkText]} >
                    Meet. Network & Deal
                </Text>
            </View>
        </View>
    </View>
  )
}

export default HowItWorks

const styles = StyleSheet.create({
    HowItWorksBox:{
        paddingHorizontal: 22,
        paddingVertical: 20,
    },
    DealNowBox:{
        paddingHorizontal: 15,
        paddingVertical: 8.5,
        backgroundColor: '#8E00DB',
        borderRadius: 10,
    },
    DealNow:{
        color: 'white'
    },
    HeadBox:{
        marginBottom: 20,
    },
    WorkBoxList:{
        marginTop: 30,
    },
    WorkBox:{
        padding: 15,
        backgroundColor: 'lightgrey',
        width: '31.5%',
        borderRadius: 15,
    },
    IconBox:{
        padding: 5,
        backgroundColor: 'white',
        marginBottom: 35,
        borderRadius: 8,
        width: 40,
        aspectRatio: 1, 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    WorkIcon:{
        flex: 1,
        width: '100%',
        maxWidth: '100%',
        height: undefined,
    },
    WorkText:{
        fontWeight: '500',
        fontSize: 14.5,
        textTransform: 'capitalize'
    },
    red:{
        backgroundColor:'#FFDCE8'
    },
    green:{
        backgroundColor:'#D3F3E2'
    },
    blue:{
        backgroundColor:'#B5E9F9'
    }
})