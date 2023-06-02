import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calendario from './Components/calenderPull'
import Navegacion from './Components/CalenderPush'
import Meta from './Components/mETA'
import login from './Components/Login'

const Stack = createStackNavigator();

const App = () => {

    return (
        <NavigationContainer >
            <Stack.Navigator >
                <Stack.Screen
                    name='Login'
                    component={login}
                />
                <Stack.Screen
                    name='Navegacion'
                    component={Navegacion}
                />
                <Stack.Screen
                    name='Meta'
                    component={Meta}
                />
                <Stack.Screen
                    name='Calendario'
                    component={Calendario}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});