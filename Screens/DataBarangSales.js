//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
    Header,
} from 'react-native-elements';

//import screen beranda
import Beranda from './SalesMenu'

// create a component
class DataBarangSales extends Component {
    static navigationOptions = {
        tabBarLabel: 'Data Barang',
        drawerIcon: ({tintColor}) => {
            return(
                <MaterialIcons
                name="shop"
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
            <Text>Data Barang Sales Page</Text>
        </View>
        );
    }
}

//make this component available to the app
export default DataBarangSales;
