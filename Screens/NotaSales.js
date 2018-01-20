//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    Header,
} from 'react-native-elements';

// create a component
class NotaSales extends Component {
    static navigationOptions = {
        tabBarLabel: 'Data Barang',
        drawerIcon: ({tintColor}) => {
            return(
                <MaterialIcons
                name="receipt"
                size={24}
                style={{color: tintColor}}
                >
                </MaterialIcons>
            );
        }
    }

    render(){
        return( <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.navigate('DrawerOpen')}}
                centerComponent={{ text: 'WELCOME SALES', style: { color: '#fff' } }}
                rightComponent={{icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Beranda')}}
            />
            <Text>Nota Sales Page</Text>
        </View>
        );
    }
}

//make this component available to the app
export default NotaSales;
