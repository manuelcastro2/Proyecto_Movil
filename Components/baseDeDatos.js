import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, Modal, Pressable } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import firebase from './../firebase-config';


const llamadoData = ({ navigation }) => {

    const sendDataToFirebase = async (userId, phone, name, age) => {
        try {
            const firestore = getFirestore();
            await setDoc(doc(firestore, 'test', userId), {
                phone: phone,
                name: name,
                age: age,
            });
            console.log('Datos guardados en Firebase.');
            // Aquí puedes añadir cualquier otra acción que desees realizar después de guardar los datos.
        } catch (error) {
            console.log('Error al guardar los datos: ', error);
        }
        clearInputs();
    };


    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const clearInputs = () => {
        setUserId('');
        setPhone('');
        setName('');
        setAge('');
        setUsuarioId('');
    };


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="userId"
                onChangeText={(text) => setUserId(text)}
                value={userId}
            />

            <TextInput
                style={styles.input}
                placeholder="Nombre"
                onChangeText={(text) => setName(text)}
                value={name}
            />

            <TextInput
                style={styles.input}
                placeholder="Edad"
                onChangeText={(text) => setAge(text)}
                value={age}
            />

            <TextInput
                style={styles.input}
                placeholder="Teléfono"
                onChangeText={(text) => setPhone(text)}
                value={phone}
            />

            <Button title='send data' onPress={() => sendDataToFirebase(userId, phone, name, age)}></Button>

        </View>
    )
}

export default llamadoData;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
    },
    userContainer: {
      marginBottom: 12,
    },
    userInfo: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '80%',
    },
    modalCloseButton: {
      marginTop: 16,
      alignSelf: 'flex-end',
    },
    modalCloseButtonText: {
      fontSize: 16,
      color: 'blue',
    }, modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
      width: '80%',
    },
    modalCloseButton: {
      marginTop: 16,
      alignSelf: 'flex-end',
    },
    modalCloseButtonText: {
      fontSize: 16,
      color: 'blue',
    },
    
  
  
  });
