import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const Header = ({header}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{header}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default Header;
