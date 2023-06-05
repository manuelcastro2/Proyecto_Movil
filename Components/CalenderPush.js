import { useEffect, useState } from 'react';
import * as React from 'react';
import { StyleSheet, Dimensions, View, Button, Text, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from "@react-native-picker/picker";


const Actividades = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.botonSeguimiento}>
                <Button style={styles.boton}
                    title='Seguimiento'
                    onPress={() => navigation.navigate('Calendario')}
                />
            </View>
            <View style={styles.botonMeta}>
                <Button style={styles.boton}
                    title='Meta'
                    onPress={() => navigation.navigate('Meta')}
                />
            </View>
            <View style={styles.botonMeta}>
                <Button style={styles.boton}
                    title='Objetivos'
                    onPress={() => navigation.navigate('Objetivos')}
                />
            </View>
        </View>
    );
}
export default Actividades;

const styles = StyleSheet.create({
    calendario: {
        position: 'relative',
        width: Dimensions.get('window').width - 25,
        justifyContent: 'flex-start',
        top: 10,
    }, container: {
        flex: 1,
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    }, boton: {
        position: 'absolute',
       backgroundColor:'#ffff',
    }, textStyle: {
        padding: 10,
        backgroundColor: 'white',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 18,
        color: 'black',
        zIndex: 10,
        top: 350,
        right: 200,
    },
    botonSeguimiento:{
        position:'relative',
        bottom:20,
    },
    botonMeta:{
        position:'relative',
        top:20,
    }
   
   
});

