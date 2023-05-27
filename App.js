import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Calendario from './Components/calenderPull'
import Actividades from './Components/CalenderPush'


const Stack= createStackNavigator();

const App=()=> {

        return (
            <NavigationContainer >
                <Stack.Navigator >
                    <Stack.Screen 
                    name='Calendario'
                    component={Calendario}
                    
                    />
                    <Stack.Screen
                    name='Actividades'
                    component={Actividades}
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