//firebase
import React,{useState} from 'react';
import { View, StyleSheet,Button,Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';



const Calendario=({navigation})=> {
        const [selected, setSelected] = useState('');
    const Enviar=()=> {
        console.log(selected);
       navigation.navigate('Navegacion')
    }
    const handleChangeText = text => {
        setNombre(text)
      }
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
                onPress={Enviar}
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
        zIndex:1,
        maxWidthwidth: 150,
        height: 50,
        borderRadius: 30,
        position: 'relative',
        backgroundColor:'#3a12ae'
    }
});