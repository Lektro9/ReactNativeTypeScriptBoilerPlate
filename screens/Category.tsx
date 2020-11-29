import React, { useState, useCallback, useEffect } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
} from 'react-native';
import getCards from '../hooks/getCards';


const Category = ({ route }) => {
    const myCards = getCards();
    const { data } = route.params;
    console.log(data);
    return (
        <View>
            <FlatList
                data={myCards.cards.slice(0, 5)}
                keyExtractor={(item) => '' + item}
                renderItem={({ item }) => (
                    <View>
                        <Text>{item.id} {item.karten_thema} {item.frage}</Text>
                    </View>)} />
        </View>
    );
};

export default Category;