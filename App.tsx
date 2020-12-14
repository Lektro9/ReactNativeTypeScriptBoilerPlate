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
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';
import Home from './screens/Home';
import Category from './screens/Category';
import { SWRConfig } from 'swr';

const fetcher = (...args: any[]) => fetch(...args).then((res) => res.json());

type RootStackParamList = {
  Home: undefined;
  Category: { item: string };
};
const RootStack = createStackNavigator<RootStackParamList>();

interface AppProps {}

const App: AppProps = () => {
  return (
    <SWRConfig value={fetcher}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={Home} />
          <RootStack.Screen
            name="Category"
            component={Category}
            options={({ route }) => ({ title: route.params.item })}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </SWRConfig>
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
