//firebase
import React, { useState } from 'react';
import { View, StyleSheet, Button, Dimensions, FlatList, Text } from 'react-native';
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
        console.log('Las metas son : ', goals )
        console.log('Las metas solas son : ', goalsOnly)
        return goalsOnly;
    };

    const [goals, setGoals] = useState('');
    const [correo, setCorreo] = useState(Correo.obtenerCorreo());
    const [goalsOnly, setGoalsOnly] = useState('');

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

            <Button title='Enviar' style={styles.boton}
                onPress={()=>fetchAllGoals()}
            />

            <FlatList style={styles.lista}
                renderItem={({ goalsOnly }) => <Text>{goalsOnly}</Text>}
                keyExtractor={goalsOnly => goalsOnly}
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
        top: 10,
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
        height: Dimensions.get('window').height-105,
        width: Dimensions.get('window').width-20,
        backgroundColor:'#aaaa'
    },
});