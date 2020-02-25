import React from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#D39D38'],
        title: 'Haze',
        subtitle: "Just don't go outside."
    },
    Thunderstrom: {
        iconName: 'weather-lightning',
        gradient: ['#373b44', '#4286f4'],
        title: 'Thunderstorm',
        subtitle: 'TTT'
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#89F7FE', '#005BEA'],
        title: 'Drizzle',
        subtitle: 'DDDD'
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#00C6FB', '#005bea'],
        title: 'Rainy',
        subtitle: 'get out with an umbrella'
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#7DE2FC', '#B9B6E5'],
        title: 'Snow',
        subtitle: 'SSSS'
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#89f7fe', '#66a6ff'],
        title: 'Atmosphere',
        subtitle: 'AAAA'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#ff7300', '#fef253'],
        title: 'Clear',
        subtitle: 'CCCC'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#d7d2cc', '#304352'],
        title: 'Clouds',
        subtitle: 'CCCC'
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#4da0b0', '#d39d38'],
        title: 'Mist',
        subtitle: 'MMMM'
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#4DA0B0', '#d39d38'],
        title: 'Dust',
        subtitle: "Thanks a lot China"
    },
}

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle='light-content' />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    size={96}
                    name={weatherOptions[condition].iconName}
                    color="white" />
                <Text style={styles.temp}>{temp}o</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstrom',
        'Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust'
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10
    },
    subtitle: {
        fontWeight: '600',
        color: 'white',
        fontSize: 24
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    }
})