//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import react-native-elements
import {
  Header,
} from 'react-native-elements';

// create a component
class Sales extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff'}}
                    centerComponent={{ text: 'WELCOME SALES', style: { color: '#fff' } }}
                    rightComponent={{icon: 'home', color: '#fff'}}
                />
                <Text>Sales Page</Text>
            </View>
        );
    }
}

// define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default Sales;
