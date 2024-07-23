import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';
import { useFilter } from '../context/FilterContext';

const FilterScreen: React.FC = () => {
  const { filterState, setFilterState } = useFilter();
  const [title, setTitle] = useState(filterState.title);
  const [category, setCategory] = useState(filterState.category);

  const handleApplyFilters = () => {
    setFilterState({ title, category });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.filterContainer}>
        <Text style={styles.label}>Filter by Title:</Text>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="Enter book title"
        />
        <Text style={styles.label}>Filter by Category:</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={setCategory}
          placeholder="Enter category"
        />
        <Button title="Apply Filters" onPress={handleApplyFilters} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  filterContainer: { flex: 1, justifyContent: 'center' },
  label: { fontSize: 16, marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default FilterScreen;
