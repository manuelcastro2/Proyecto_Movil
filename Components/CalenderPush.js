import { useEffect, useState } from 'react';
import * as React from 'react';
import { StyleSheet, Dimensions, View, Button, Text,TextInput } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Picker } from "@react-native-picker/picker";


const Actividades = ({navigation}) => {
    
    const [selected, setSelected] = useState('');
    const [selectedValue1, setSelectedValue1] = useState("");
    const [selectedValue2, setSelectedValue2] = useState("");
    const [nombre, setNombre] = useState('')
    const Enviar=()=> {
        console.log(selectedValue1 + ":" + selectedValue2)
        console.log(selected);
        console.log(nombre)
       navigation.navigate('Calendario')
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
            <View style={styles.containerinterno}>
                <View>
                    <Text style={styles.title}>HORA</Text>
                    <Picker
                        selectedValue={selectedValue1}
                        style={styles.piker}
                        onValueChange={(itemValue) => setSelectedValue1(itemValue)}
                    >
                        <Picker.Item style={styles.pikerItem} label="01" value="01" />
                        <Picker.Item style={styles.pikerItem} label="02" value="02" />
                        <Picker.Item style={styles.pikerItem} label="03" value="03" />
                        <Picker.Item style={styles.pikerItem} label="04" value="04" />
                        <Picker.Item style={styles.pikerItem} label="05" value="05" />
                        <Picker.Item style={styles.pikerItem} label="06" value="06" />
                        <Picker.Item style={styles.pikerItem} label="07" value="07" />
                        <Picker.Item style={styles.pikerItem} label="08" value="08" />
                        <Picker.Item style={styles.pikerItem} label="09" value="09" />
                        <Picker.Item style={styles.pikerItem} label="11" value="11" />
                        <Picker.Item style={styles.pikerItem} label="12" value="12" />
                    </Picker>
                </View>
                <View>
                    <Text style={styles.title}>MINUTOS</Text>
                    <Picker
                        selectedValue={selectedValue2}
                        style={styles.piker}
                        onValueChange={(itemValue) => setSelectedValue2(itemValue)}
                    >
                        <Picker.Item style={styles.pikerItem} label="00" value="00" />
                        <Picker.Item style={styles.pikerItem} label="01" value="01" />
                        <Picker.Item style={styles.pikerItem} label="02" value="02" />
                        <Picker.Item style={styles.pikerItem} label="03" value="03" />
                        <Picker.Item style={styles.pikerItem} label="04" value="04" />
                        <Picker.Item style={styles.pikerItem} label="05" value="05" />
                        <Picker.Item style={styles.pikerItem} label="06" value="06" />
                        <Picker.Item style={styles.pikerItem} label="07" value="07" />
                        <Picker.Item style={styles.pikerItem} label="08" value="08" />
                        <Picker.Item style={styles.pikerItem} label="09" value="09" />
                        <Picker.Item style={styles.pikerItem} label="11" value="11" />
                        <Picker.Item style={styles.pikerItem} label="12" value="12" />
                        <Picker.Item style={styles.pikerItem} label="13" value="13" />
                        <Picker.Item style={styles.pikerItem} label="14" value="14" />
                        <Picker.Item style={styles.pikerItem} label="15" value="15" />
                        <Picker.Item style={styles.pikerItem} label="16" value="16" />
                        <Picker.Item style={styles.pikerItem} label="17" value="17" />
                        <Picker.Item style={styles.pikerItem} label="18" value="18" />
                        <Picker.Item style={styles.pikerItem} label="19" value="19" />
                        <Picker.Item style={styles.pikerItem} label="21" value="21" />
                        <Picker.Item style={styles.pikerItem} label="22" value="22" />
                        <Picker.Item style={styles.pikerItem} label="23" value="23" />
                        <Picker.Item style={styles.pikerItem} label="24" value="24" />
                        <Picker.Item style={styles.pikerItem} label="25" value="25" />
                        <Picker.Item style={styles.pikerItem} label="26" value="26" />
                        <Picker.Item style={styles.pikerItem} label="27" value="27" />
                        <Picker.Item style={styles.pikerItem} label="30" value="30" />
                        <Picker.Item style={styles.pikerItem} label="31" value="31" />
                        <Picker.Item style={styles.pikerItem} label="32" value="32" />
                        <Picker.Item style={styles.pikerItem} label="33" value="33" />
                        <Picker.Item style={styles.pikerItem} label="34" value="34" />
                        <Picker.Item style={styles.pikerItem} label="35" value="35" />
                        <Picker.Item style={styles.pikerItem} label="36" value="36" />
                        <Picker.Item style={styles.pikerItem} label="37" value="37" />
                        <Picker.Item style={styles.pikerItem} label="38" value="38" />
                        <Picker.Item style={styles.pikerItem} label="39" value="39" />
                        <Picker.Item style={styles.pikerItem} label="40" value="40" />
                        <Picker.Item style={styles.pikerItem} label="41" value="41" />
                        <Picker.Item style={styles.pikerItem} label="42" value="42" />
                        <Picker.Item style={styles.pikerItem} label="43" value="43" />
                        <Picker.Item style={styles.pikerItem} label="44" value="44" />
                        <Picker.Item style={styles.pikerItem} label="45" value="45" />
                        <Picker.Item style={styles.pikerItem} label="46" value="46" />
                        <Picker.Item style={styles.pikerItem} label="47" value="47" />
                        <Picker.Item style={styles.pikerItem} label="48" value="48" />
                        <Picker.Item style={styles.pikerItem} label="49" value="49" />
                        <Picker.Item style={styles.pikerItem} label="50" value="50" />
                        <Picker.Item style={styles.pikerItem} label="51" value="51" />
                        <Picker.Item style={styles.pikerItem} label="52" value="52" />
                        <Picker.Item style={styles.pikerItem} label="53" value="53" />
                        <Picker.Item style={styles.pikerItem} label="54" value="54" />
                        <Picker.Item style={styles.pikerItem} label="55" value="55" />
                        <Picker.Item style={styles.pikerItem} label="56" value="56" />
                        <Picker.Item style={styles.pikerItem} label="57" value="57" />
                        <Picker.Item style={styles.pikerItem} label="58" value="58" />
                        <Picker.Item style={styles.pikerItem} label="59" value="59" />
                    </Picker>
                </View>
            </View>
            <TextInput
            style={styles.input}
            placeholder='Digite la Actividad'
           onChangeText={handleChangeText}
            ></TextInput>
                <Button title='Enviar' style={styles.boton}
                onPress={Enviar}
                />
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
        position:'relative'
    }, boton: {
        position:'absolute',
        bottom: 50,
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
    piker: {
        position: 'relative',
        right: 80,
        width: 100,
        borderColor: 'black',
        paddingHorizontal: 10,
        backgroundColor: 'white'
    },
    pikerItem: {
        borderBottomWidth: 100,
        textAlign: 'center'
    },
    containerinterno: {
        flex: 1,
        gap: 10,
        flexDirection: "row",
        position: 'relative',
        top: 30
    },
    title: {
        position: "relative",
        textAlign: "center",
        right: 80
    },input:{
        backgroundColor:'white',
        borderColor: '#1155a3',
        borderBottomWidth:2,
        position:'relative',
        bottom:180,
        right:35,
        padding:10,
        width:300
    }
});

