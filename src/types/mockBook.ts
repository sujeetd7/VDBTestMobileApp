import { Book } from '../types';

// Define a complete mock Book object for the HomeScreen
export const mockBooks: Book[] = [
  {
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
          title: 'Test Book One',
          authors: ['Author One'],
          categories: ['Fiction'],
          description: 'Description of Test Book One',
          imageLinks: {
              thumbnail: 'https://via.placeholder.com/150',
              smallThumbnail: 'https://via.placeholder.com/100',
          },
          allowAnonLogging: false,
          averageRating: 4.5,
          canonicalVolumeLink: 'https://example.com/book1',
          contentVersion: '1.1',
          infoLink: 'https://example.com/info1',
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
  },
  // Add more mock books if needed
];
