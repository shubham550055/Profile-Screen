import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Card} from 'react-native-paper';

export class Cardview extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover
              source={{
                uri: 'https://picsum.photos/700',
              }}
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
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
        <View style={styles.followcontainer}>
          <Card style={styles.cardview}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
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
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
        </View>
      </SafeAreaView>
    );
  }
}

export default Cardview;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
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
});
