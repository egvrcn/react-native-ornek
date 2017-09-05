import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Header = (props) => {
    const { baslik, viewStyle } = styles;
    return (
      <View style={viewStyle}>
        <Text style={baslik}> {props.headerText} </Text>
      </View>
    );
};

const styles = StyleSheet.create({
  baslik: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#eeeeee',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  }
});

export default Header;
