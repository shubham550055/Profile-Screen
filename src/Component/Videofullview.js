import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-controls';

export default class Videofullview extends React.PureComponent {
  state = {
    video: null,
    isBuffering: false,
  };

  onBuffer(res) {
    console.log('Check is Buffering', res);
  }
  onError(err) {
    console.log('Check video error', err);
  }

  _onExitFunc = () => {
    this.setState({
      fullScreen: false,
      orientLandscape: false,
    });
  };

  // onBackPress = () => {
  //   () => setModalVisible(!modalVisible);
  // };

  render() {
    return (
      <View style={{flex: 1}}>
        <VideoPlayer
          ref={(ref) => {
            this.player = ref;
            console.log('Check REference', ref);
          }}
          playInBackground={false}
          playWhenInactive={false}
          paused={false}
          disableBack={true}
          tapAnywhereToPause={true}
          disableFullscreen={true}
          fullscreenAutorotate={true}
          fullscreen={true}
          source={{
            uri:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
          }}
          onBuffer={this.onBuffer}
          onError={this.onError}
          onLoad={this.onLoad}
          style={this.state.fullScreen ? style.fullscreenVideo : style.video}
        />
      </View>
    );
  }
}

let style = StyleSheet.create({
  video: {
    height: Dimensions.get('window').width * (9 / 16),
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
});
