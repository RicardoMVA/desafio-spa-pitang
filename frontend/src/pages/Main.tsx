import { useState, useEffect } from 'react';
import SearchNavbar from '../components/SearchNavbar';
import GridFotos from '../components/GridFotos';
import { getRecent, search } from "../services/flickrApi"
import { IFlickrResponse } from '../interfaces/IFlickrResponse'
import { IFlickrPhoto } from '../interfaces/IFlickrPhoto'

const Main : React.FC = () => {
  const [listaFotos, setListaFotos] = useState<IFlickrPhoto[]>()

  useEffect(() => {
    (async () => {
      const respRecentes: IFlickrResponse = await getRecent()
      const listaRecentes: Array<IFlickrPhoto> = respRecentes.photos.photo
      return setListaFotos(listaRecentes)
    })()    
  }, []);

  const runSearch = async (searchText: string) => {
    const pesquisa: IFlickrResponse = await search(searchText)

    if (pesquisa.stat === "fail") {
      console.log("pesquisa falhou")
    } else {
      const resultadoPesquisa: Array<IFlickrPhoto> = pesquisa.photos.photo
      return setListaFotos(resultadoPesquisa)
    }
  }

  return (
    <div className="Main">
      <SearchNavbar handleSubmit={runSearch} />
      <GridFotos fotos={listaFotos} />
    </div>
  );
}

export default Main;
