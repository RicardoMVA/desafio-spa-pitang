import { useEffect } from 'react';
import SearchNavbar from '../components/SearchNavbar';
import { getRecent, search } from "../services/flickrApi"
import { IFlickrResponse } from '../interfaces/IFlickrResponse'
import { IFlickrPhoto } from '../interfaces/IFlickrPhoto'

const Main : React.FC = () => {
  useEffect(() => {
    (async () => {
      const respRecentes: IFlickrResponse = await getRecent()
      const listaRecentes: Array<IFlickrPhoto> = respRecentes.photos.photo
      console.log(listaRecentes)
    })()    
  }, []);

  const runSearch = async (searchText: string) => {
    const pesquisa: IFlickrResponse = await search(searchText)

    if (pesquisa.stat === "fail") {
      console.log("pesquisa falhou")
    } else {
      const resultadoPesquisa: Array<IFlickrPhoto> = pesquisa.photos.photo
      console.log(resultadoPesquisa)
    }
  }

  return (
    <SearchNavbar handleSubmit={runSearch} />
  );
}

export default Main;
