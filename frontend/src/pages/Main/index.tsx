import { useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import Container from "react-bootstrap/Container";
import SearchNavbar from '../../components/SearchNavbar';
import GridFotos from '../../components/GridFotos';
import { getRecent, search } from "../../services/flickrApi"
import { IFlickrResponse } from '../../interfaces/IFlickrResponse'
import { IFlickrPhoto } from '../../interfaces/IFlickrPhoto'
import "./style.css";

const Main : React.FC = () => {
  const [listaFotos, setListaFotos] = useState<IFlickrPhoto[]>([])
  const [searchedText, setSearchedText] = useState("")
  const [page, setPage] = useState(1)
  const [descricaoResultado, setDescricaoResultado] = useState("")

  useEffect(() => {
    runAdicionadosRecentemente()    
  }, []);

  const runAdicionadosRecentemente = async () => {
    setSearchedText("")
    setPage(1)

    const respRecentes: IFlickrResponse = await getRecent(page)
    const listaRecentes: Array<IFlickrPhoto> = respRecentes.photos.photo
    setDescricaoResultado("Fotos adicionadas recentemente:")
    return setListaFotos(listaRecentes)
  }

  const runSearch = async (searchText: string) => {
    setSearchedText(searchText)
    setPage(1)
    const pesquisa: IFlickrResponse = await search(searchText, 1)

    if (pesquisa.stat === "fail") {
      runAdicionadosRecentemente()
    } else {
      const resultadoPesquisa: Array<IFlickrPhoto> = pesquisa.photos.photo
      setDescricaoResultado(`Resultado da pesquisa por '${searchText}':`)
      return setListaFotos(resultadoPesquisa)
    }
  }

  window.onscroll = debounce(async () => {
    const alturaTela = window.innerHeight
    const posicao = document.documentElement.scrollTop
    const alturaTotal = document.documentElement.offsetHeight

    if (alturaTela + posicao >= Math.round(alturaTotal * 0.8)) {
      const newPage = page + 1
      setPage(newPage)

      let fetch: IFlickrResponse;

      if (searchedText) {
        fetch = await search(searchedText, newPage)
      } else {
        fetch = await getRecent(newPage)
      }

      const resultado: Array<IFlickrPhoto> = fetch.photos.photo
      return setListaFotos([...listaFotos, ...resultado])
    }
  }, 200);

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
