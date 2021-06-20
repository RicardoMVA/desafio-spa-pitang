import axios from 'axios'
import { IFlickrResponse } from '../interfaces/IFlickrResponse'

const getRecent = async (page: number) : Promise<IFlickrResponse> => {
  const options = {
    params: {
      method: 'flickr.photos.getRecent',
      safe_search: 1,
      format: 'json',
      per_page: 40,
      page: page,
      nojsoncallback: 1
    }
  }
  
  const response = await axios.get(process.env.REACT_APP_URL_API as string, options)
  return response.data
}

const search = async (text: string, page: number) : Promise<IFlickrResponse> => {
  const options = {
    params: {
      method: 'flickr.photos.search',
      safe_search: 1,
      format: 'json',
      per_page: 40,
      page: page,
      nojsoncallback: 1,
      text: text
    }
  }
  
  const response = await axios.get(process.env.REACT_APP_URL_API as string, options)
  return response.data
}

export {
  getRecent,
  search
}