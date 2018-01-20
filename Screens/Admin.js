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

//make this component available to the app
export default Admin;
