import React, { useEffect, useState, useCallback } from 'react';
import { SafeAreaView, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Book } from '../types';
import { fetchBooks } from '../utils/api';
import { useFilter } from '../context/FilterContext';
import CategoryFilter from '../component/CategoryFilter';
import BookItem from '../component/BookItem';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const booksPerPage = 10;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [displayedBooks, setDisplayedBooks] = useState<Book[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const { filterState, setFilterState } = useFilter();

  const categories = ['All', 'Fiction', 'Non-Fiction', 'Science', 'History'];

  useEffect(() => {
    const loadBooks = async () => {
      setLoading(true);
      try {
        const fetchedBooks = await fetchBooks();
        console.log('Fetched Books:', fetchedBooks);

        const filteredBooks = fetchedBooks.filter((book: { volumeInfo: { categories: string | string[]; title: string; }; }) => {
          const matchesCategory = filterState.category === 'All' || book.volumeInfo?.categories?.includes(filterState.category);
          const matchesTitle = book.volumeInfo?.title.toLowerCase().includes(filterState.title.toLowerCase());
          return matchesCategory && matchesTitle;
        });

        const paginatedBooks = filteredBooks.slice(0, page * booksPerPage);
        setDisplayedBooks(paginatedBooks);

        setBooks(fetchedBooks);
      } catch (error) {
        console.error('Error loading books:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBooks();
  }, [page, filterState]);

  const handlePress = useCallback((book: Book) => {
    navigation.navigate('Details', { book });
  }, [navigation]);

  const loadMoreBooks = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  const handleCategoryChange = useCallback((newCategory: string) => {
    setPage(1);
    setFilterState(prevState => ({ ...prevState, category: newCategory }));
  }, [setFilterState]);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Open Filter" onPress={() => navigation.navigate('Filter')} />
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          ListHeaderComponent={
            <CategoryFilter
              categories={categories}
              selectedCategory={filterState.category}
              onCategoryChange={handleCategoryChange}
            />
          }
          data={displayedBooks}
          keyExtractor={(item) => item.volumeInfo.title}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <BookItem book={item} onPress={handlePress} />
          )}
          ListFooterComponent={<Button title="Load More" onPress={loadMoreBooks} />}
          extraData={filterState}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});

export default HomeScreen;
