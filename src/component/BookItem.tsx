import React, { memo } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import { Book } from '../types';

interface BookItemProps {
  book: Book;
  onPress: (book: Book) => void;
}

const BookItem: React.FC<BookItemProps> = ({ book, onPress }) => {
  return (
    <TouchableOpacity style={styles.bookItem} onPress={() => onPress(book)}>
      <Image source={{ uri: book.volumeInfo.imageLinks?.thumbnail || book.volumeInfo.imageLinks?.smallThumbnail }} style={styles.thumbnail} />
      <View style={styles.bookInfo}>
        <Text style={styles.title}>{book.volumeInfo.title}</Text>
        <Text style={styles.author}>{book.volumeInfo.authors?.join(', ')}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bookItem: { flexDirection: 'row', marginBottom: 16 },
  thumbnail: { width: 80, height: 120, borderRadius: 5 },
  bookInfo: { marginLeft: 10, flex: 1 },
  title: { fontSize: 16, fontWeight: 'bold' },
  author: { fontSize: 14, color: 'gray' },
});

export default memo(BookItem);
