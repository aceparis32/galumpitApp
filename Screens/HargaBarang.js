//import liraries
import React, { Component } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

import{
    Header,
} from 'react-native-elements';

//import Beranda
import Beranda from './AdminMenu'

// create a component
class HargaBarang extends Component {
    static navigationOptions = {
        tabBarLabel: 'Stok Barang',
        drawerIcon: ({tintColor}) => {
            return(
                <MaterialIcons
                name="monetization-on"
                size={24}
                style={{color: tintColor}}
                ></MaterialIcons>
            );
        }
    }
    render(){
        return <View>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.navigate('DrawerOpen')}}
                centerComponent={{ text: 'WELCOME ADMIN', style: { color: '#fff' } }}
                rightComponent={{icon: 'home', color: '#fff', onPress: () => this.props.navigation.navigate('Beranda')}}
            />
            <Text>Harga Barang Screen</Text>
        </View>
    }
}

//make this component available to the app
export default HargaBarang;
