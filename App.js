import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MusicList from './src/view/features/musicview/view/music';
import { DarkTheme } from './src/core/init/theme/color/dark_theme_color';
import { LightTheme } from './src/core/init/theme/color/light_theme_color';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-navigation';
import { applyMiddleware, createStore } from 'redux';
import { reducer } from './src/redux/reducers/reducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => {
  const scheme = useColorScheme();
  return (
    <Provider store={store}>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : LightTheme}>
        <StatusBar
          barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
          backgroundColor={scheme === 'dark' ? DarkTheme.colors.card : LightTheme.colors.card}
        />
        <MusicList />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
