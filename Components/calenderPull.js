//firebase
import React, { useState } from 'react';
import { View, StyleSheet, Button, Dimensions, FlatList, TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc, getDoc, collection, query, where, getDocs } from 'firebase/firestore'
import firebase from '../firebase-config';
import Correo from './Correo';


const Calendario = ({ navigation }) => {
    const [selected, setSelected] = useState('');
    const fetchAllGoals = async () => {

        try {

            const firestore = getFirestore();
            const metasCollection = collection(firestore, 'test');
            const metasQuery = query(metasCollection, where('correo', '==', correo), where('flagMeta', '==', '1'));
            const querySnapshot = await getDocs(metasQuery);

            const metas = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setGoals(metas);
            setGoalsOnly(goals.map((dato) => dato.meta));

        } catch (error) {
            console.log('Error al obtener los datos de los usuarios: ', error);
        }
        console.log(selected);
        console.log('Las metas son : ', goals)
        console.log('Las metas solas son : ', goalsOnly)
        return goalsOnly;
    };

    const [goals, setGoals] = useState('');
    const [correo, setCorreo] = useState(Correo.obtenerCorreo());
    const [goalsOnly, setGoalsOnly] = useState('');
    const [estadoO, setEstado] = useState('');
    const aprobado = () => {
        setEstado('true')
    }

    const Noaprobado = () => {
        setEstado('false')
    }

    const sendDataToFirebase = async (meta) => {
        try {

            const idDocumento = correo + "_" + selected + "_" + meta;
            const firestore = getFirestore();
            await setDoc(doc(firestore, 'test', idDocumento), {
                correo: correo,
                meta: meta,
                flagMeta: '1',
                estado: 'true'
            });
            console.log('Datos guardados en Firebase exitosamente.');
            console.log(idDocumento);
            // Aquí puedes añadir cualquier otra acción que desees realizar después de guardar los datos.
        } catch (error) {
            console.log('Error al guardar los datos: ', error);
        }
        clearInputs();
    };
    const [meta, setMeta] = useState('');
    return (
        <View style={styles.container}>
            <Calendar style={styles.calendario}
                onDayPress={day => {
                    setSelected(day.dateString)
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />

            <Button title='MOSTRAR METAS' style={styles.boton}
                onPress={() => fetchAllGoals()}
            />

            <FlatList style={styles.lista}
                data={goals}
                renderItem={({ item }) =>
                    <View style={styles.impresion}>
                        <View style={styles.direccion}>
                            <View style={styles.contenedor}><TextInput  value={item.meta} onChangeText={(text)=>setMeta(text)} /></View>
                            <View style={styles.contenedores}><Button onPress={aprobado} title='/'></Button></View>
                            <View style={styles.contenedores}><Button onPress={Noaprobado} title='X'></Button></View>
                            <View style={styles.contenedor}><Button onPress={()=>sendDataToFirebase(meta)} title='Enviar'></Button></View>
                        </View>
                    </View>}
                keyExtractor={item => item.meta}
            />
        </View>
    );
}
export default Calendario;

const styles = StyleSheet.create({
    calendario: {
        position: 'relative',
        width: Dimensions.get('window').width - 25,
        justifyContent: 'flex-start',
        top: -5,
    }, container: {
        flex: 1,
        backgroundColor: 'rgba(240, 240, 240, 0.8)',
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }, boton: {
        zIndex: 1,
        maxWidthwidth: 150,
        height: 50,
        borderRadius: 30,
        position: 'relative',
        backgroundColor: '#3a12ae'
    },
    lista: {
        position: 'relative',
        top: 5,
        height: Dimensions.get('window').height - 105,
        width: Dimensions.get('window').width - 100,
        backgroundColor: 'white',
        borderRadius: 26
    },
    impresion: {
        width: Dimensions.get('window').width - 100,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
    }, direccion: {
        flexDirection: 'row',
        height: 50,
        position: 'relative',
        top: 20,
        gap: 5,
    },
    contenedor: {
        width: 80
    },
    contenedores: {
        width: 30
    }
});