import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Navbar extends Component {
    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>AWD | Elective Course at BTECH</Text>
                <View style={styles.headerTabContainer}>
                    <Text style={styles.headerTab}>Overview</Text>
                    <Text style={styles.headerTab}>Contact</Text>
                    <Text style={styles.headerTab}>Support</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#5882FA',
        height: 150,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25,
    },
    headerText: {
        marginTop: 25,
        fontSize: 24,
        color: 'white',
    },
    headerTabContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 25,
        backgroundColor: '#819FF7',
        alignSelf: 'flex-end',
    },
    headerTab: {
        fontSize: 18,
        paddingVertical: 10
    }
});

export default Navbar;

