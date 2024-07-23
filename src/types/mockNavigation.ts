import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types';

// Create a mock navigation object with essential methods
export const mockNavigation: StackNavigationProp<RootStackParamList, 'Home'> = {
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
