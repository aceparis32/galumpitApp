//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  Header,
} from 'react-native-elements';

import {
    SideMenu,
} from 'react-native-side-menu';

import {
    DrawerNavigator,
} from 'react-navigation';

//import another screen to sidebar
import StokBarang from './StokBarang'
import HargaBarang from './HargaBarang'
import AdminMenu from './AdminMenu'

// create a component
// class Home extends Component {
//     render() {
//         return (
//             <View>
//                 <Header
//                     leftComponent={{ icon: 'menu', color: '#fff', }}
//                     centerComponent={{ text: 'WELCOME ADMIN', style: { color: '#fff' } }}
//                     rightComponent={{icon: 'home', color: '#fff'}}
//                 />
//                 <Text>Home Screen</Text>
//             </View>
//         );
//     }

// }

const Admin = DrawerNavigator(
    {
        Beranda: {
            path: '/',
            screen: AdminMenu,
        },
        Stok_Barang: {
            path: '/',
            screen: StokBarang,
        },
        Harga_Barang: {
            path: '/',
            screen: HargaBarang,
        }
    },
    {
        initialRouteName: 'Beranda',
        drawerPosition: 'left',
    }
)

// // define your styles
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#2c3e50',
//     },
// });

//make this component available to the app
export default Admin;
