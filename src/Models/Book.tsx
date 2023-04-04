import { Author } from './Author';

export type Book = {
  id: number,
  title: string, 
  thumbnailUrl: string, 
  description: string,
  authors: Author[], 
  average_rating: number,
  num_available: number,
  page_count: number,
}