import axios from 'axios'
import { IFlickrResponse } from '../interfaces/IFlickrResponse'

const getRecent = async () : Promise<IFlickrResponse> => {
  const options = {
    params: {
      api_key: '6e31907a124b1f213987edd662bca758',
      method: 'flickr.photos.getRecent',
      safe_search: 1,
      format: 'json',
      per_page: 20,
      page: 1,
      nojsoncallback: 1
    }
  }
  
  const response = await axios.get(`https://api.flickr.com/services/rest/`, options)
  return response.data
}

const search = async (text : string) : Promise<IFlickrResponse> => {
  const options = {
    params: {
      api_key: '6e31907a124b1f213987edd662bca758',
      method: 'flickr.photos.search',
      safe_search: 1,
      format: 'json',
      per_page: 20,
      page: 1,
      nojsoncallback: 1,
      text: text
    }
  }
  
  const response = await axios.get(`https://api.flickr.com/services/rest/`, options)
  return response.data
}

export {
  getRecent,
  search
}