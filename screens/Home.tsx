import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import getCards from '../hooks/getCards';

function generateColor(): string {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const colorMap: any = {};

const testData = Array.from(Array(200), (_, i) => {
  colorMap[i] = generateColor();
  return i;
});

const Home = ({ navigation, route }) => {
  const myCards = getCards();
  //   const categories = [...new Set(myCards.cards.map((c) => c.karten_thema))];
  //   console.log(categories);
  return (
    <View style={styles.container}>
      {myCards.isLoading && <Text>Loading</Text>}
      {myCards.cards && (
        <FlatList
          style={styles.list}
          data={[...new Set(myCards.cards.map((c) => c.karten_thema))]}
          keyExtractor={(item) => '' + item}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Category', { item });
              }}
              style={[
                styles.dragBox,
                { backgroundColor: '#' + generateColor() },
              ]}>
              <View>
                <Text style={styles.dragHandler}>@</Text>
              </View>
              <Text style={styles.textBox}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      )}
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
