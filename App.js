import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CalePull from './Components/calenderPull'
import CalePush from './Components/CalenderPush'

const Stack= createStackNavigator();

export default class App extends React.Component {
    render() {
        return (
            <NavigationContainer >
                <Stack.Navigator >
                    <Stack.Screen 
                    name='Calendario'
                    component={CalePull}
                    />
                    <Stack.Screen
                    name='Actividades'
                    component={CalePush}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});