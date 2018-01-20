//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

//add react-native-elements
import {
  Header,
  FormInput,
  FormLabel,
} from 'react-native-elements';

// create a component
class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header
                    centerComponent={{text:'TB.Galumpit Shop Management', style: { color: '#FFFFFF'}}}
                />
                <Text style={styles.textStyle}>Login Screen</Text>
                <FormLabel>Username</FormLabel>
                <FormInput/>
                <FormLabel>Password</FormLabel>
                <FormInput/>
                <Button onPress={() => this.props.navigation.navigate('Admin')} title="Login Admin" style={styles.buttonStyle} />
                <Button onPress={() => this.props.navigation.navigate('Sales')} title="Login Sales"/>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },

    textStyle: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 25,
    },

    buttonStyle: {

        justifyContent: 'center',
        alignItems: 'center',
    }

});

//make this component available to the app
export default Login;
