import React, {useState} from 'react';
import {Text, View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';
import ImageView from 'react-native-image-view';

const Cardview = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const images = [
    {
      source: {
        uri: 'https://picsum.photos/seed/picsum/200/300',
      },
      // title: 'Paris',
      width: 806,
      height: 750,
    },
  ];
  // state = {Image: 'https://picsum.photos/700'};

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Card.Cover
                source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
              />
            </TouchableOpacity>
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
            />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
            />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Card Card style={styles.cardview}>
            <Card.Cover
              source={{uri: 'https://picsum.photos/seed/picsum/200/300'}}
            />
          </Card>
        </View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View>
              <ImageView
                images={images}
                imageIndex={0}
                onClose={() => setModalVisible(!modalVisible)}
                animationType="fade"
              />
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default Cardview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginBottom: 60,
  },
  followcontainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative',
    marginBottom: 3,
  },
  cardview: {
    width: '49%',
    height: '100%',
    marginLeft: 2,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
