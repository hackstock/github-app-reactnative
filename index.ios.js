import React, {Component} from 'react';
import {AppRegistry,NavigatorIOS,StyleSheet} from 'react-native';
import MainScreen from './App/Components/Main';


class App extends Component{
  render(){
    return(
      <NavigatorIOS style={{flex: 1}}
      initialRoute={{
        title: 'Github App',
        component: MainScreen
      }}
      />
      );
  }
}





AppRegistry.registerComponent('GithubApp',() => App);