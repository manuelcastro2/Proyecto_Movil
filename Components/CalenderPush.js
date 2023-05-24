import React,{ useEffect, useState } from 'react';
import { StyleSheet, Dimensions,View,Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Hora from './hour';

const app=()=> {
    const [selected, setSelected] = useState('');
    return (
        <View style={styles.container}>
            <Calendar style={styles.calendario}
                onDayPress={day => {
                    setSelected(day.dateString)
                    console.log(day.dateString);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                }}
            />
                <Hora></Hora>
        </View>
    );
}
export default app;

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
    maxWidthwidth: 100,
    height: 50,
    borderRadius: 30,
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
}
});

