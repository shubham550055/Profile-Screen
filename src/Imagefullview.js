import React from 'react';
import {View, Text} from 'react-native';
import ImageView from 'react-native-image-view';

const Imagefullview = () => {
  const images = [
    {
      source: {
        uri:
          'https://cdn.pixabay.com/photo/2017/08/17/10/47/paris-2650808_960_720.jpg',
      },
      title: 'Paris',
      width: 806,
      height: 720,
    },
  ];
  return (
    <View>
      <ImageView
        images={images}
        imageIndex={0}
        // isVisible={this.state.isImageViewVisible}
        // renderFooter={(currentImage) => (
        //   <View>
        //     <Text>My footer</Text>
        //   </View>
        // )}
      />
    </View>
  );
};

export default Imagefullview;
