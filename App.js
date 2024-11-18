import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.box1} />
            <Text style={styles.text}>Hello World</Text>
            <View style={styles.box2} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d3d3d3', 
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 24, 
        color: 'blue', 
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1, 
    },
    box1: {
        width: 100, 
        height: 100, 
        backgroundColor: '#22177A', 
    },
    box2: {
        width: 100, 
        height: 100, 
        backgroundColor: '#FF2929', 
    },
});

export default FlexBoxLayout;