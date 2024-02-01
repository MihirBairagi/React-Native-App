import { Image, StyleSheet, Text, View, TouchableOpacity, Modal, TextInput  } from 'react-native'
import React, { useState } from 'react'
import { alignCenter, flexBox, heading3, justifyBetween } from '../../assets/style'

const Question = ({ profileImage, name, question, answerProfile, answerName, answer }) => {
  const [showAnswerBox, setShowAnswerBox] = useState(false);

  const toggleAnswerBox = () => {
    setShowAnswerBox(!showAnswerBox);
  };

  return (
    <View style={[flexBox, styles.QuestionBox]}>
      <View style={styles.ProfileBox}>
        <Image source={profileImage} style={styles.Profile} />
      </View>
      <View style={styles.TextBox}>
        <Text style={styles.Name}>{name}</Text>
        <Text style={styles.Question}>{question}</Text>
        <TouchableOpacity
          style={[flexBox, alignCenter, styles.ReplyBox]}
          onPress={toggleAnswerBox}
        >
          <Image
            source={require('../../assets/img/reply-icon.png')}
            style={styles.Profile}
          />
          <Text style={styles.ReplyText}>
            1 Reply By Seller
          </Text>
        </TouchableOpacity> 
        {showAnswerBox && (
          <View style={[flexBox, styles.QuestionBox, styles.AnswerBox]}>
            <View style={styles.ProfileBox}>
                <Image source={answerProfile} style={[styles.Profile, styles.AnswerProfile]} />
            </View>
            <View style={[styles.TextBox, styles.AnswerTextBox]}>
                <Text style={styles.Name}>{answerName}</Text>
                <Text style={styles.Question}>{answer}</Text>
            </View>    
          </View>
        )}
      </View>
    </View>
  );
};

const AskQuestion = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModal2Visible, setModal2Visible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleModal2 = () => {
    setModal2Visible(!isModal2Visible);
    setModalVisible(!isModalVisible);
  };

  const toggleModal3 = () =>{
    setModal2Visible(!isModal2Visible);

  }

  const questionsData = [
    {
      id: 1,
      profileImage: require('../../assets/img/profile-1.png'),
      name: 'Alexander Thomas',
      question: 'Hey Can I get your personal number?',
      answerProfile: require('../../assets/img/profile-3.png'),
      answerName: 'Jason Smith',
      answer: 'Hey Alexander, these are original Nikes which is autographed by Lebron James during an exhibition match in our college. The condition is also new! :-D',
    },
    {
      id: 2,
      profileImage: require('../../assets/img/profile-2.png'),
      name: 'Rebbica Smith',
      question: 'Hey I saw you the other day at college, was wondering if we can meet and deal?',
      answerProfile: require('../../assets/img/profile-2.png'),
      answerName: 'Alexander Thomas',
      answer: 'Hey Rebbica, these are original Nikes which is autographed by Lebron The condition is also new! :-D',
    },
    {
      id: 3,
      profileImage: require('../../assets/img/profile-3.png'),
      name: 'Jason Smith',
      question: 'What is the condition of the products?',
      answerProfile: require('../../assets/img/profile-1.png'),
      answerName: 'Rebbica Smith',
      answer: 'Hey Jason, these are original Nikes which is autographed by Lebron James during an exhibition match in our college.',
    },
  ];

  return (
    <View style={styles.AskQuestionBox}>
      <View style={[flexBox, justifyBetween, styles.HeadBox]}>
        <Text style={[heading3, styles.HeadingText]}>
          Have A Question? Ask Seller
        </Text>
        <TouchableOpacity style={[styles.AskBtnBox, flexBox]} onPress={toggleModal}>
          <Text style={styles.AskText}>Ask </Text>
          <Text style={styles.AskBtn}>+ </Text>
        </TouchableOpacity>
      </View>

      {questionsData.map((question) => (
        <Question key={question.id} {...question} />
      ))}

      <View style={[flexBox, styles.pagination]}>
        <Text style={[styles.pageNumber, styles.selected]}>1</Text>
        <Text style={styles.pageNumber}>2</Text>
        <Text style={styles.pageNumber}>3</Text>
      </View>

      {/* Modal */}
      <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
        <View style={styles.modalContainer}>
          <View style={styles.SellerPopUpBox} >
            <View style={[styles.popupHeadBox, flexBox, justifyBetween, alignCenter]} >
              <Text style={[heading3]} >Ask Seller</Text>
              <TouchableOpacity onPress={toggleModal}>
                <Image
                  source={require('../../assets/img/close.png')}
                  style={styles.ClosePopUP}
                />
              </TouchableOpacity>
            </View>
            <View style={[styles.RecQueBox, flexBox]} >
              <Text style={[styles.RecQue]} >What is the Price of the Product?</Text>
              <Text style={[styles.RecQue]} >Is there a Warranty or Return Policy?</Text>
              <Text style={[styles.RecQue]} >What are Customer Reviews?</Text>
              <Text style={[styles.RecQue]} >Recommended Rumie User</Text>
            </View>
            <TextInput
              style={styles.inputBox}
              placeholder={'Hey, Can i get this for a $1 as I am broke this month and there was a secret whi..'}
              textAlignVertical="top"
              multiline={true}
            />
            <TouchableOpacity onPress={toggleModal2} style={[styles.PostBox, flexBox]} >
                <View style={styles.PostBtnBox} >
                  <Text style={styles.PostBtn} >Post Question</Text>
                </View>
                <Image
                  source={require('../../assets/img/post-icon.png')}
                  style={styles.PostIcon}
                />
              </TouchableOpacity>
          </View>
        </View>
      </Modal>

    {/* Modal 2 */}
      <Modal 
       animationType="slide"
       transparent={true}
       visible={isModal2Visible}
       onRequestClose={toggleModal2}
       >
        <View style={styles.modalContainer} >
          <View style={[styles.SellerPopUpBox, styles.ConfirmPopUpBox]} >
            <Image
              source={require('../../assets/img/confirm-icon.png')}
              style={styles.confirmIcon}
            />
            <Text style={styles.confirmHeading} >Comment Will Be Public Are You Sure?</Text>
            <Text style={styles.confirmPara} >Please make sure that you are respectful towards fellow college mates and follow our community guidelines.</Text>

            <View style={[styles.confirmBtnBox, flexBox]} >
              <TouchableOpacity onPress={toggleModal3} >
                <Text style={[styles.confirmBtn]} >No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal3} >
                <Text style={[styles.confirmBtn, styles.bgVoilet]} >Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

    </View>
  );
};

export default AskQuestion

const styles = StyleSheet.create({

  modalContainer:{
    height: '100%',
    backgroundColor: '#000000bb',
    // marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  SellerPopUpBox:{
    marginTop: -40,
    width: '90%',
    backgroundColor: '#F8F7FF',
    padding: 18,
    borderRadius: 30,
  },
  ClosePopUP:{
    objectFit: 'contain',
    height: 60,
    marginRight: -10,
  },  
  popupHeadBox:{
    marginTop: -10,
  }, 
  RecQueBox:{
    flexWrap: 'wrap'
  }, 
  RecQue:{
    fontSize: 8.5,
    paddingHorizontal: 8,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 3,
    marginVertical: 5,
  }, 
  inputBox:{
    height: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor:'#CFC9DF',
    marginVertical: 10,
    textAlign:'left',
    padding: 15,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  PostBox:{
    backgroundColor: '#8E00DB',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
  }, 
  PostBtn:{
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    width: 'auto',
    textAlign: 'right'
  },
  PostBtnBox:{
    width: '69%',
  }, 
  ConfirmPopUpBox:{
    alignItems: 'center',
  }, 
  confirmIcon:{
    marginTop: 40,
    height: 100,
    objectFit: 'contain',
    marginBottom: 25,
  }, 
  confirmHeading:{
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 13,
  }, 
  confirmPara:{
    fontSize: 14,
    textAlign: 'center',
    paddingHorizontal: 10,
    color: '#4D4D5B',
    lineHeight: 20,
    marginBottom: 20,
  },  
  confirmBtn:{
    fontSize: 18,
    marginHorizontal: 5,
    borderWidth: 2,
    borderColor: '#8F00DB',
    paddingHorizontal: 30,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 15,
    color: '#8F00DB',
    marginBottom: 20,
  },
  bgVoilet:{
    backgroundColor: '#8F00DB',
    color: '#fff'
  },
    AskQuestionBox:{
        marginHorizontal: 22,
        marginVertical: 20,
        backgroundColor: '#F8F7FF',
        paddingHorizontal:22,
        paddingVertical: 20,
        borderRadius: 20,
    },
    HeadingText:{
        width: '50%',
    },
    AskBtnBox:{
        borderWidth: 1.5,
        borderColor: '#F75864',
        paddingHorizontal: 15,
        alignItems: 'center',
        borderRadius: 30,
    },
    AskText:{
        fontSize: 15,
        fontWeight: '600',
        color:'#8E00DB',
    },
    AskBtn:{
        color:'#8E00DB',
        fontSize: 22,
        marginLeft: 5,
        marginTop: -2,
    },
    HeadBox:{
        marginBottom: 25,
    },
    QuestionBox:{
        marginBottom: 15,
    },
    Profile:{
        borderRadius: 30,
        marginRight: 15,
    },
    Name:{
        fontSize: 12.5,
        fontWeight: '500',
        marginBottom: 5,
    },
    Question:{
        fontSize: 10.5,
        marginBottom: 5,
    },
    ReplyText:{
        color: '#8E00DB',
        fontSize: 8.5,
        fontWeight: '500',
        marginLeft: -10,
    },
    TextBox:{
        borderBottomWidth: 1.2,
        borderColor: "#E8E8EB",
        width: '85%',
        paddingBottom: 13
    },
    pagination:{
        textAlign: 'center',
        marginHorizontal: 'auto',
        justifyContent: 'center'
    },
    pageNumber:{
        borderRadius: 5,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: '#CDCDCD',
        marginHorizontal: 5,
        fontSize: 8,
    },
    selected:{
        color: '#fff',
        backgroundColor: '#8E00DB',
        borderColor: '#8E00DB',
    },
    AnswerBox:{
        marginTop: 15,
        marginBottom: 2,
    },
    AnswerTextBox:{
        borderBottomWidth: 0,
        paddingBottom: 0,
    },
    AnswerProfile:{
        marginRight: 10,
    },


})