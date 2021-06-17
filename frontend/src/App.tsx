import { useEffect } from 'react';
import SearchNavbar from './components/SearchNavbar';
import { getRecent } from "./services/flickrApi"

const App : React.FC = () => {
  useEffect(() => {
    (async () => {
      const listaRecentes = await getRecent()
      console.log(listaRecentes)
    })()    
  }, []);

  return (
    <div className="App">
      <SearchNavbar />
    </div>
  );
}

export default App;
