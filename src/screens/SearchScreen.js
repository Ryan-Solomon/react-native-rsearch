import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [submitTerm, setSubmitTerm] = useState('');

  React.useEffect(() => {
    const getResults = async () => {
      const { data } = await yelp.get('/search', {
        params: {
          limit: 50,
          term,
          location: 'san jose',
        },
      });
      setResults(data.businesses);
    };
    getResults();
  }, [submitTerm]);

  return (
    <View>
      <SearchBar
        onTermSubmit={() => setSubmitTerm(term)}
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
      />
      <Text>We have found {results.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
