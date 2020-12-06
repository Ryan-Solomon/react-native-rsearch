import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {
  const [input, setInput] = React.useState();

  return (
    <View style={styles.background}>
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#333',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
