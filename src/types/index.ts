export type RootStackParamList = {
  Home: { title?: string; category?: string };
  Details: {book: Book};
  Filter: undefined;
};

export interface AccessInfo {
  accessViewStatus: string;
  country: string;
  embeddable: boolean;
  epub: Record<string, any>;
  pdf: Record<string, any>;
  publicDomain: boolean;
  quoteSharingAllowed: boolean;
  textToSpeechPermission: string;
  viewability: string;
  webReaderLink: string;
}

export interface SaleInfo {
  country: string;
  isEbook: boolean;
  saleability: string;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

export interface IndustryIdentifier {
  type: string;
  identifier: string;
}

export interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

export interface ReadingModes {
  image: boolean;
  text: boolean;
}

export interface VolumeInfo {
  allowAnonLogging: boolean;
  authors: string[];
  averageRating: number;
  canonicalVolumeLink: string;
  categories: string[];
  contentVersion: string;
  description: string;
  imageLinks: ImageLinks;
  industryIdentifiers: IndustryIdentifier[];
  infoLink: string;
  language: string;
  maturityRating: string;
  pageCount: number;
  panelizationSummary: PanelizationSummary;
  previewLink: string;
  printType: string;
  publishedDate: string;
  publisher: string;
  ratingsCount: number;
  readingModes: ReadingModes;
  title: string;
}

export interface Book {
  accessInfo: AccessInfo;
  etag: string;
  id: string;
  kind: string;
  saleInfo: SaleInfo;
  selfLink: string;
  volumeInfo: VolumeInfo;
}
// export interface Book {
//   title: string;
//   thumbnail: string;
//   categories: string[];  // Assuming 'categories' is an array of strings
//   author: string;
//   description: string;
// }

export const book: Book = {
  accessInfo: {
    accessViewStatus: 'NONE',
    country: 'IN',
    embeddable: false,
    epub: {},
    pdf: {},
    publicDomain: false,
    quoteSharingAllowed: false,
    textToSpeechPermission: 'ALLOWED',
    viewability: 'NO_PAGES',
    webReaderLink:
      'http://play.google.com/books/reader?id=KVGd-NabpW0C&hl=&source=gbs_api',
  },
  etag: '2ZO3B0dpWsg',
  id: 'KVGd-NabpW0C',
  kind: 'books#volume',
  saleInfo: {
    country: 'IN',
    isEbook: false,
    saleability: 'NOT_FOR_SALE',
  },
  selfLink: 'https://www.googleapis.com/books/v1/volumes/KVGd-NabpW0C',
  volumeInfo: {
    allowAnonLogging: false,
    authors: ['Albert Camus'],
    averageRating: 4.5,
    canonicalVolumeLink:
      'https://books.google.com/books/about/The_Plague.html?hl=&id=KVGd-NabpW0C',
    categories: ['Fiction'],
    contentVersion: '1.1.1.0.preview.0',
    description:
      "“Its relevance lashes you across the face.” —Stephen Metcalf, The Los Angeles Times • “A redemptive book, one that wills the reader to believe, even in a time of despair.” —Roger Lowenstein, The Washington Post A haunting tale of human resilience and hope in the face of unrelieved horror, Albert Camus' iconic novel about an epidemic ravaging the people of a North African coastal town is a classic of twentieth-century literature. The townspeople of Oran are in the grip of a deadly plague, which condemns its victims to a swift and horrifying death. Fear, isolation and claustrophobia follow as they are forced into quarantine. Each person responds in their own way to the lethal disease: some resign themselves to fate, some seek blame, and a few, like Dr. Rieux, resist the terror. An immediate triumph when it was published in 1947, The Plague is in part an allegory of France's suffering under the Nazi occupation, and a timeless story of bravery and determination against the precariousness of human existence.",
    imageLinks: {
      smallThumbnail:
        'http://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=5&source=gbs_api',
      thumbnail:
        'http://books.google.com/books/content?id=KVGd-NabpW0C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    },
    industryIdentifiers: [
      {type: 'ISBN_10', identifier: '0679720219'},
      {type: 'ISBN_13', identifier: '9780679720218'},
    ],
    infoLink:
      'http://books.google.co.in/books?id=KVGd-NabpW0C&dq=subject:fiction&hl=&source=gbs_api',
    language: 'en',
    maturityRating: 'NOT_MATURE',
    pageCount: 312,
    panelizationSummary: {
      containsEpubBubbles: false,
      containsImageBubbles: false,
    },
    previewLink:
      'http://books.google.co.in/books?id=KVGd-NabpW0C&dq=subject:fiction&hl=&cd=1&source=gbs_api',
    printType: 'BOOK',
    publishedDate: '1991-05-07',
    publisher: 'Vintage',
    ratingsCount: 14,
    readingModes: {
      image: false,
      text: false,
    },
    title: 'The Plague',
  },
};
