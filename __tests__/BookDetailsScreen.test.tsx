import React from 'react';
import { render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import DetailsScreen from '../src/screens/BookDetailsScreen';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, Book } from '../src/types';

// Define a complete mock Book object
const mockBook: Book = {
  id: '1',
  kind: 'books#volume',
  etag: 'etag_example',
  accessInfo: {
    country: 'US',
    viewability: 'PARTIAL',
    embeddable: true,
    publicDomain: false,
    textToSpeechPermission: 'ALLOWED',
    epub: { isAvailable: true },
    pdf: { isAvailable: false },
    webReaderLink: 'https://example.com',
    accessViewStatus: 'SAMPLE',
    quoteSharingAllowed: false
  },
  volumeInfo: {
    title: 'Test Book',
    authors: ['Author One', 'Author Two'],
    categories: ['Fiction'],
    description: 'This is a test description',
    imageLinks: {
      thumbnail: 'https://via.placeholder.com/150',
      smallThumbnail: 'https://via.placeholder.com/100',
    },
    allowAnonLogging: false,
    averageRating: 4.5,
    canonicalVolumeLink: 'https://example.com/book',
    contentVersion: '1.1',
    infoLink: 'https://example.com/info',
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    readingModes: {
      text: true,
      image: false,
    },
    ratingsCount: 123,
    industryIdentifiers: [],
    language: '',
    maturityRating: '',
    pageCount: 0,
    previewLink: '',
    printType: '',
    publishedDate: '',
    publisher: ''
  },
  saleInfo:  {
    country: 'IN',
    isEbook: false,
    saleability: 'NOT_FOR_SALE',
  },
  selfLink: ''
};

// Create a mock route object
const mockRoute: RouteProp<RootStackParamList, 'Details'> = {
  key: 'DetailsRouteKey',
  name: 'Details',
  params: { book: mockBook },
};

// Create a mock navigation object with essential methods
const mockNavigation: StackNavigationProp<RootStackParamList, 'Details'> = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  addListener: jest.fn(),
  removeListener: jest.fn(),
  reset: jest.fn(),
  setParams: jest.fn(),
  dispatch: jest.fn(),
  canGoBack: jest.fn(),
  getId: jest.fn(),
  isFocused: jest.fn(),
  getState: jest.fn(),
} as any; // Type assertion to satisfy StackNavigationProp

// Mock the component with both route and navigation props
test('renders DetailsScreen correctly with book details', () => {
  const { getByText, getByTestId } = render(
    <NavigationContainer>
      <DetailsScreen route={mockRoute} navigation={mockNavigation} />
    </NavigationContainer>
  );

  // Check if the book details are rendered correctly
  expect(getByText('Test Book')).toBeTruthy();
  expect(getByText('Author One, Author Two')).toBeTruthy();
  expect(getByText('Fiction')).toBeTruthy();
  expect(getByText('This is a test description')).toBeTruthy();
  expect(getByTestId('thumbnail')).toBeTruthy(); // Ensure this test ID is set in DetailsScreen
});
