//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from  'react-native-vector-icons/MaterialIcons';

//import header
import {
    Header,
} from 'react-native-elements';

// create a component
class SalesMenu extends Component {
    static navigationOptions = {
        tabBarLabel: 'Stok Barang',
        drawerIcon: ({tintColor}) => {
            return(
                <MaterialIcons
                name="home"
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
                centerComponent={{ text: 'WELCOME SALES', style: { color: '#fff' } }}
            />
            <Text>Dashboard Sales Screen</Text>
        </View>
                
    }
}

//make this component available to the app
export default SalesMenu;
