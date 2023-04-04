import { Author } from './Author';

export type Book = {
  id: number,
  title: string, 
  thumbnailUrl: string, 
  description: string,
  authors: Author[], 
  averageRating: number,
  numAvailable: number,
  page_count: number,
}