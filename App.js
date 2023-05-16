import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

export default class CalendarExample extends React.Component {
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
                <Calendar
                    markedDates={this.state.markedDates}
                    markingType="period"
                    onDayPress={this.onDayPress}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        padding: 20,
        justifyContent: 'center'
    }
});