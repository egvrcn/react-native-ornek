import React from 'react';

import { Text, View, AppRegistry, StyleSheet } from 'react-native';

import Header from './src/components/Header';

import Liste from './src/components/Liste';

const TestMerhaba = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'ÖRNEK PROJE'} />
    <Liste />
  </View>
);

AppRegistry.registerComponent('ornekProje', () => TestMerhaba);
