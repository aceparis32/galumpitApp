//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

//import react-native-elements
import {
  Header,
} from 'react-native-elements';

//import react-navigation
import {
    DrawerNavigator,
} from 'react-navigation';

import SalesMenu from './SalesMenu'
import DataBarang from './DataBarangSales'
import NotaSales from './NotaSales'

const Sales = DrawerNavigator(
    {
        Beranda: {
            path: '/',
            screen: SalesMenu,
        },
        Data_Barang: {
            path: '/',
            screen: DataBarang,
        },
        Nota: {
            path: '/',
            screen: NotaSales,
        }
    },
    {
        initialRouteName: 'Beranda',
        drawerPosition: 'left',
    }
)

//make this component available to the app
export default Sales;
