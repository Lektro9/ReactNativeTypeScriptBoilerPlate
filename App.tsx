/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: { HermesInternal: null | {} };

function generateColor(): string {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const colorMap: any = {};

const testData = Array.from(Array(200), (_, i) => {
  colorMap[i] = generateColor();
  return i;
});

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <FlatList
          numColumns={2}
          style={styles.list}
          data={testData}
          keyExtractor={(item) => '' + item}
          renderItem={({ item }) => (
            <View
              style={[
                styles.dragBox,
                { backgroundColor: '#' + colorMap[item] },
              ]}>
              <View>
                <Text style={styles.dragHandler}>@</Text>
              </View>
              <Text style={styles.textBox}>{item}</Text>
            </View>
          )}
        />
      </View>
    </NavigationContainer>
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

export default App;
