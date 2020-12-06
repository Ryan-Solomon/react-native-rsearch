import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
  const [input, setInput] = React.useState();

  return (
    <View style={styles.background}>
      <Feather size={30} name='search' />
      <TextInput
        style={styles.inputStyle}
        placeholder='Search'
        onChangeText={(e) => setInput(e.target.value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#b5b5b5',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default SearchBar;
