import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, Modal, Pressable } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import firebase from '../firebase-config';


const llamadoData = ({ navigation }) => {

  const sendDataToFirebase = async (correo, meta) => {
    try {

      const idDocumento = correo + "_" + meta;
      const firestore = getFirestore();
      await setDoc(doc(firestore, 'test', idDocumento), {
        correo: correo,
        meta: meta,
        flagMeta : '1'
      });
      console.log('Datos guardados en Firebase exitosamente.');
      console.log(idDocumento);
      // Aquí puedes añadir cualquier otra acción que desees realizar después de guardar los datos.
    } catch (error) {
      console.log('Error al guardar los datos: ', error);
    }
    clearInputs();
  };


  const [correo, setCorreo] = useState('');
  const [meta, setMeta] = useState('');

  const clearInputs = () => {
    setCorreo('');
    setMeta('');
  
  };


  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="correo"
        onChangeText={(text) => setCorreo(text)}
        value={correo}
      />

      <TextInput
        style={styles.input}
        placeholder="nombre meta"
        onChangeText={(text) => setMeta(text)}
        value={meta}
      />

      <Button title='send data' onPress={() => sendDataToFirebase(correo, meta)}></Button>

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
