import { Author } from './Author';
import { Category } from './Category';

export type Book = {
  id: number,
  title: string, 
  thumbnailUrl: string, 
  description: string,
  authors: Author[], 
  categories: Category[],
  averageRating: number,
  numAvailable: number,
  pageCount: number,
  ratingsCount: number,
  publisher: string, 
  publishedDate: string,
}