/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';

import FetchLocation from './components/FetchLocation';

export default class App extends React.Component {

    getUserLocation = () => {
      console.log("you clicked me...");
    }

    render(){
      return(
        <View>
          <FetchLocation onGetLocation={this.getUserLocation}></FetchLocation>
        </View>
      );
    }
}

const styles = StyleSheet.create({
  
});

