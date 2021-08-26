import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MusicList from './src/view/features/musicview/view/music';
import {DarkTheme} from './src/core/init/theme/color/dark_theme_color';
import {LightTheme} from './src/core/init/theme/color/light_theme_color';
import {useTheme} from '@react-navigation/native';

const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <StatusBar
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={useTheme().colors.background}
      />
      <MusicList />
    </NavigationContainer>
  );
};

export default App;
