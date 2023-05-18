//firebase
import * as React from 'react';
import { View, StyleSheet,Text,Button,Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';


export default class CalendarPull extends React.Component {
    state = {
        markedDates: {},
        isStartDatePicked: false,
    }

    onDayPress = (day) => {
        console.log(day.dateString)
        if (this.state.isStartDatePicked == false) {
            let markedDates = {}
            markedDates[day.dateString] = { color: '#00B0BF', textColor: '#FFFFFF' };
            this.setState({
                markedDates: markedDates,
            });
        } 
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>calender pull</Text>
                <Calendar style={styles.calendario}
                    markedDates={this.state.markedDates}
                    markingType="period"
                    onDayPress={this.onDayPress}
                />
            <Button
            title='subir'
            onPress={()=>this.props.navigation.navigate('Bajar')}
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    calendario: {
        position: 'relative',
        width: Dimensions.get('window').width - 100,
        top: 30,
    },container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: 20,
        justifyContent: 'center'
    }
});