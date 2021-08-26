import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MusicList from './src/view/features/musicview/view/music';
import {
  DarkTheme
} from './src/core/init/theme/color/dark_theme_color';
import { LightTheme } from './src/core/init/theme/color/light_theme_color';
const App = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
      <MusicList />
    </NavigationContainer>
  );
};

export default App;
