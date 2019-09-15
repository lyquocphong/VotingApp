import * as React from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { FontAwesome } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([      
      require('./assets/images/bg_login.jpg'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      // <View>
      //   <StatusBar backgroundColor="blue" barStyle="light-content" />      
      // </View>
      <LoginScreen />
    );
  }
}