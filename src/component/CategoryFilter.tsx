import React, { memo } from 'react';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.categoryButton, selectedCategory === cat && styles.categoryButtonSelected]}
          onPress={() => onCategoryChange(cat)}
        >
          <Text style={styles.categoryText}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: { flexDirection: 'row', marginBottom: 16 },
  categoryButton: { padding: 10, marginRight: 10, backgroundColor: '#ddd', borderRadius: 5 },
  categoryButtonSelected: { backgroundColor: '#007bff' },
  categoryText: { color: '#333' },
});

export default memo(CategoryFilter);
