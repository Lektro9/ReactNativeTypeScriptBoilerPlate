import React, { useState, useCallback, useEffect } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import useSWR from 'swr';

function generateColor(): string {
    return Math.floor(Math.random() * 16777215).toString(16);
}

const colorMap: any = {};

const testData = Array.from(Array(200), (_, i) => {
    colorMap[i] = generateColor();
    return i;
});



const Home = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <FlatList
                numColumns={2}
                style={styles.list}
                data={testData}
                keyExtractor={(item) => '' + item}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Category', { item });
                    }}
                        style={[
                            styles.dragBox,
                            { backgroundColor: '#' + colorMap[item] },
                        ]}>
                        <View>
                            <Text style={styles.dragHandler}>@</Text>
                        </View>
                        <Text style={styles.textBox}>{item}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    list: {
        flex: 1,
        padding: 10,
        width: '100%',
    },
    textBox: {
        fontSize: 22,
        flex: 1,
        textAlign: 'center',
    },
    dragBox: {
        elevation: 20,
        flex: 1 / 2,
        borderRadius: 10,
        margin: 20,
        padding: 50,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    dragHandler: {
        fontSize: 22,
    },
});

export default Home;
