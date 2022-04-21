import React, { Component } from "react";
import { View , Text, StyleSheet } from "react-native";

class TodoList extends Component {
    render() {
        return (
            <View style={styles.todoContainer}>
                <Text style={styles.item}>Define scope for the project</Text>
                <Text style={styles.item}>Gather data and content</Text>
                <Text style={styles.item}>Prepare design templates</Text>
                <Text style={styles.item}>Go fo a walk and get some fresh air</Text>
                <Text style={styles.item}>Perform design tests</Text>
                <Text style={styles.item}>Add functionality</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    todoContainer: {
        backgroundColor: '#848484',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    item: {
        color: 'white',
        fontSize: 16,
        paddingVertical: 12,
    }
});

export default TodoList;

