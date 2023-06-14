/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
 
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux'
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Router />
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor:Colors.lighter,
  },
});

export default App;
