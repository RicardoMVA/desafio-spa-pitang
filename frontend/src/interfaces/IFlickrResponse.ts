import { IFlickrPhoto } from './IFlickrPhoto'

export interface IFlickrResponse {
  stat: string;
  photos: {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo: Array<IFlickrPhoto>
  }
}