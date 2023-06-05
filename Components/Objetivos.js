import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, Modal, Pressable } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import firebase from '../firebase-config';
import Correo from './Correo';



const llamdoObjetivos = ({ navigation }) => {

  const sendDataToFirebase = async (meta, fecha, bool) => {
    try {

      const idDocumento = correo + "_" + fecha + "_" + meta;
      const firestore = getFirestore();
      await setDoc(doc(firestore, 'test', idDocumento), {
        correo: correo,
        meta: meta,
        estado: bool
      });
      console.log('Datos guardados en Firebase exitosamente.');
      console.log(idDocumento);
      // Aquí puedes añadir cualquier otra acción que desees realizar después de guardar los datos.
    } catch (error) {
      console.log('Error al guardar los datos: ', error);
    }
    clearInputs();
  };


  const fetchAllGoals = async (meta) => {

    try {

      const firestore = getFirestore();
      const metasCollection = collection(firestore, 'test');
      const metasQuery = query(metasCollection, where('correo', '==', correo), where('meta', '==', meta));
      const querySnapshot = await getDocs(metasQuery);

      const metas = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setGoals(metas);

    } catch (error) {
      console.log('Error al obtener los datos de los usuarios: ', error);
    }

    console.log('Las metas son : ', goals);
    setGoalsOnly(goals.map((dato) => dato.meta));
    console.log('Solo metas : ', goalsOnly);

    let countFalse = 0;
    let countTrue = 0;

    goals.forEach((elemento) => {
      // Aquí puedes realizar la operación deseada con cada elemento
      if (elemento.estado === "false") {
        countFalse++;
      } else if (elemento.estado === "true") {
        countTrue++;
      }   
    });

    console.log('para la meta: ' + meta + ' numero ' + countTrue + ' cumplidas');
    console.log('para la meta: ' + meta + ' numero  ' + countFalse + ' no cumplidas');

    let totalCount = countFalse + countTrue

    console.log('para la meta: ' + meta + ' existe   ' + totalCount + ' dias registrados');

    };



    const [correo, setCorreo] = useState(Correo.obtenerCorreo());
    const [meta, setMeta] = useState('');
    const [goals, setGoals] = useState('');
    const [goalsOnly, setGoalsOnly] = useState('');
    const [fecha, setFecha] = useState('');
    const [bool, setBool] = useState('');

    const clearInputs = () => {

      //setMeta('');

    };


    return (
      <View style={styles.container}>


        <TextInput
          style={styles.input}
          placeholder="nombre meta"
          onChangeText={(text) => setMeta(text)}
          value={meta}
        />
        <TextInput
          style={styles.input}
          placeholder="fecha"
          onChangeText={(text) => setFecha(text)}
          value={fecha}
        />
        <TextInput
          style={styles.input}
          placeholder="bool"
          onChangeText={(text) => setBool(text)}
          value={bool}
        />

        <Button title='send data' onPress={() => sendDataToFirebase(meta, fecha, bool)}></Button>
        <Button title='consultarMeta' onPress={() => fetchAllGoals(meta)}></Button>

      </View>
    )
  }

  export default llamdoObjetivos;


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
