import React from 'react';
import { Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Book } from '../types';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type DetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Details'>;

interface Props {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
}

const DetailsScreen: React.FC<Props> = ({ route }) => {
  const { book } = route.params;
  const volumeInfo = book.volumeInfo || {};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollViewContent}>
        <Image 
          source={{ uri: volumeInfo.imageLinks?.thumbnail || volumeInfo.imageLinks?.smallThumbnail || 'https://via.placeholder.com/150' }} 
          style={styles.thumbnail} 
          testID="thumbnail"
        />
        <Text style={styles.title}>{volumeInfo.title || 'No Title Available'}</Text>
        <Text style={styles.author}>{volumeInfo.authors ? volumeInfo.authors.join(', ') : 'No Authors Available'}</Text>
        <Text style={styles.category}>{volumeInfo.categories ? volumeInfo.categories.join(', ') : 'No Categories Available'}</Text>
        <Text style={styles.description}>{volumeInfo.description || 'No Description Available'}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  scrollViewContent: { alignItems: 'center' },
  thumbnail: { width: 150, height: 225, borderRadius: 10 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' },
  author: { fontSize: 18, fontStyle: 'italic', marginVertical: 5, textAlign: 'center' },
  category: { fontSize: 16, color: 'grey', marginVertical: 5, textAlign: 'center' },
  description: { fontSize: 14, marginVertical: 10, textAlign: 'center' },
});

export default DetailsScreen;
