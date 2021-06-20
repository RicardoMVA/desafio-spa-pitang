import { useState } from 'react';
import debounce from 'lodash.debounce';
import Container from "react-bootstrap/Container";
import SearchNavbar from '../../components/SearchNavbar';
import GridFotos from '../../components/GridFotos';
import { search } from "../../services/flickrApi"
import { IFlickrResponse } from '../../interfaces/IFlickrResponse'
import { IFlickrPhoto } from '../../interfaces/IFlickrPhoto'
import "./style.css";

const Main : React.FC = () => {
  const [listaFotos, setListaFotos] = useState<IFlickrPhoto[]>([])
  const [searchedText, setSearchedText] = useState("")
  const [page, setPage] = useState(1)
  const [descricaoResultado, setDescricaoResultado] = useState("Pesquise algo para começar.")

  const runSearch = async (searchText: string) => {
    setSearchedText(searchText)
    setPage(1)
    const pesquisa: IFlickrResponse = await search(searchText, 1)

    if (pesquisa.stat === "fail" || pesquisa.photos.photo.length < 1) {
      setListaFotos([])
      return setDescricaoResultado("Nenhum resultado. Por favor, tente outro termo.") 
    } else {
      const resultadoPesquisa: Array<IFlickrPhoto> = pesquisa.photos.photo
      setListaFotos(resultadoPesquisa)
      return setDescricaoResultado(`Resultado da pesquisa por '${searchText}':`)
    }
  }

  window.onscroll = debounce(async () => {
    const alturaTela = window.innerHeight
    const posicao = document.documentElement.scrollTop
    const alturaTotal = document.documentElement.offsetHeight

    if (alturaTela + posicao >= Math.round(alturaTotal * 0.8)) {
      if (searchedText) {
        const newPage = page + 1
        setPage(newPage)

        const fetch: IFlickrResponse = await search(searchedText, newPage)
        const resultado: Array<IFlickrPhoto> = fetch.photos.photo
        return setListaFotos([...listaFotos, ...resultado])
      }
    }
  }, 200);

  return (
    <div className="main">
      <SearchNavbar handleSubmit={runSearch} />
      <Container className="main-container-descricao">
        <h5 className="main-descricao">{descricaoResultado}</h5>
        {searchedText 
          ? null
          : (<img src={'./search-image.png'} className="main-background-img" alt="lupa sobre imagem" />)
        }
      </Container>
      <GridFotos fotos={listaFotos} />
    </div>
  );
}

export default Main;
