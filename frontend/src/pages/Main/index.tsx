import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import SearchNavbar from '../../components/SearchNavbar';
import GridFotos from '../../components/GridFotos';
import { getRecent, search } from "../../services/flickrApi"
import { IFlickrResponse } from '../../interfaces/IFlickrResponse'
import { IFlickrPhoto } from '../../interfaces/IFlickrPhoto'
import "./style.css";

const Main : React.FC = () => {
  const [listaFotos, setListaFotos] = useState<IFlickrPhoto[]>()
  const [descricaoResultado, setDescricaoResultado] = useState("")

  useEffect(() => {
    runAdicionadosRecentemente()    
  }, []);

  const runAdicionadosRecentemente = async () => {
    const respRecentes: IFlickrResponse = await getRecent()
    const listaRecentes: Array<IFlickrPhoto> = respRecentes.photos.photo
    setDescricaoResultado("Fotos adicionadas recentemente:")
    return setListaFotos(listaRecentes)
  }

  const runSearch = async (searchText: string) => {
    const pesquisa: IFlickrResponse = await search(searchText)

    if (pesquisa.stat === "fail") {
      runAdicionadosRecentemente()
    } else {
      const resultadoPesquisa: Array<IFlickrPhoto> = pesquisa.photos.photo
      setDescricaoResultado(`Resultado da pesquisa por '${searchText}':`)
      return setListaFotos(resultadoPesquisa)
    }
  }

  return (
    <div className="main">
      <SearchNavbar handleSubmit={runSearch} />
      <Container className="main-container-descricao">
        <h5>{descricaoResultado}</h5>
      </Container>
      <GridFotos fotos={listaFotos} />
    </div>
  );
}

export default Main;
