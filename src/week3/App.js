/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View, Dimensions
} from 'react-native';
import { AppContainer } from './src/router';


export default class App extends React.Component{
  render(){
    return(
      <>
        <AppContainer />
      </>
    )
  }
}

const styles = StyleSheet.create({
  
});

