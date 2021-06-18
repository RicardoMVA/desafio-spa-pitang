import { useEffect } from 'react';
import SearchNavbar from '../components/SearchNavbar';
import { getRecent, search } from "../services/flickrApi"

const Main : React.FC = () => {
  useEffect(() => {
    (async () => {
      const listaRecentes = await getRecent()
      console.log(listaRecentes)
    })()    
  }, []);

  const runSearch = async (searchText: string) => {
    const pesquisa = await search(searchText)

    if (pesquisa.stat === "fail") {
      console.log("pesquisa falhou")
    } else {
      console.log(pesquisa)
    }
  }

  return (
    <SearchNavbar handleSubmit={runSearch} />
  );
}

export default Main;
