//firebase
import * as React from 'react';
import { View, StyleSheet,Button,Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';


export default class CalendarPull extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
                <Calendar style={styles.calendario}
                />
                <Button style={styles.boton}
                    title='Actividades'
                    onPress={() => this.props.navigation.navigate('Actividades')}
                />
            </View>
        );
    }
}

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