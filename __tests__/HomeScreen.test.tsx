import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../src/screens/HomeScreen';
import { fetchBooks } from '../src/utils/api';
import {mockBooks} from '../src/types/mockBook'
import {mockNavigation} from '../src/types/mockNavigation'

// Mock the API function
jest.mock('../utils/api', () => ({
  fetchBooks: jest.fn(),
}));

describe('HomeScreen', () => {
  beforeEach(() => {
    (fetchBooks as jest.Mock).mockResolvedValue(mockBooks);
  });

  test('renders HomeScreen correctly and displays book list', async () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} />
      </NavigationContainer>
    );

    // Ensure the mock data is rendered
    await waitFor(() => {
      expect(getByText('Test Book One')).toBeTruthy();
      expect(getByText('Author One')).toBeTruthy();
      expect(getByText('Fiction')).toBeTruthy();
      expect(getByTestId('thumbnail')).toBeTruthy(); // Ensure testID is used in HomeScreen
    });
  });

  test('handles category change correctly', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} route={undefined} />
      </NavigationContainer>
    );

    // Check initial category
    expect(getByText('All')).toBeTruthy();

    // Simulate category button press
    fireEvent.press(getByText('Fiction'));

    // Ensure the displayed books are filtered
    await waitFor(() => {
      // Add checks to ensure books are filtered correctly
    });
  });

  test('loads more books on button press', async () => {
    const { getByText, findByText } = render(
      <NavigationContainer>
        <HomeScreen navigation={mockNavigation} route={undefined} />
      </NavigationContainer>
    );

    // Simulate load more button press
    fireEvent.press(getByText('Load More'));

    // Ensure more books are loaded (you might need to mock additional books or state changes)
    await waitFor(() => {
      // Add checks to ensure more books are loaded
    });
  });
});
