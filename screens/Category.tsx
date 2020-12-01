import React, { useState, useCallback, useEffect } from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';
import FlipCard from 'react-native-flip-card';
import getCards from '../hooks/getCards';

const Category = ({ route }) => {
  const myCards = getCards();
  const category = route.params.item;
  console.log(category);
  return (
    <View style={styles.container}>
      {myCards.isLoading && <Text>Loading...</Text>}
      {myCards.cards && (
        <FlatList
          data={myCards.cards.filter((c) => c.karten_thema === category)}
          keyExtractor={(item) => '' + item.id}
          renderItem={({ item }) => (
            <View style={{ height: '10%', margin: 10, flex: 1 }}>
              <FlipCard
                style={{ marginBottom: 10, flex: 1 }}
                friction={3}
                perspective={1000}
                flipHorizontal={true}
                alignHeight={true}>
                {/* Face Side */}
                <View style={styles.face}>
                  <Text style={styles.textOnCard}>{item.frage}</Text>
                </View>
                {/* Back Side */}
                <View style={styles.back}>
                  <Text style={styles.textOnCard}>{item.antwort}</Text>
                </View>
              </FlipCard>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  face: {
    flex: 1,
    backgroundColor: '#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderRadius: 20,
  },
  back: {
    flex: 1,
    backgroundColor: '#f1c40f',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    borderRadius: 20,
  },
  textOnCard: {
    fontSize: 22,
  },
});

export default Category;
