import React from 'react';
import {View, Text} from 'react-native';
import 'react-native-gesture-handler';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';

const Videofullview = () => {
  return (
    <View>
      <Video
        playInBackground={false}
        playWhenInactive={false}
        paused={true}
        disableBack={true}
        disableFullscreen={true}
        disableVolume={true}
        tapAnywhereToPause={true}
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        toggleResizeModeOnFullscreen={true}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Videofullview;
