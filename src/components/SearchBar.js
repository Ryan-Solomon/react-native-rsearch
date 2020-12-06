import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  const [input, setInput] = React.useState();

  return (
    <View style={styles.background}>
      <Feather size={30} name='search' />
      <TextInput />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#666666',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
