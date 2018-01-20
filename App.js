import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//add react-navigator
import {
  StackNavigator,
} from  'react-navigation';


//import screens
import Login from './Screens/Login'
import Admin from './Screens/Admin'
import Sales from './Screens/Sales'

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const AppNavigator = StackNavigator({
  Login:
  { screen: Login,
    navigationOptions: {
      header: null,
    },
  },
  
  Admin:
  { screen: Admin,
    navigationOptions: {
      header: null,
    },
  },

  Sales:
  {
    screen: Sales,
    navigationOptions: {
      header: null,
    }
  }
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
