const API_URL = 'https://www.jsonkeeper.com/b/HJQ3';

export const fetchBooks = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error('Error fetching data', error);
    throw error;
  }
};
