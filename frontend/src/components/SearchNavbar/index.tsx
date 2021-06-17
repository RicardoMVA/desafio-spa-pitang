import { useState } from 'react';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import { search } from "../../services/flickrApi"

const SearchNavbar : React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const handleChangeSearch = (input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchText(input.currentTarget.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const pesquisa = await search(searchText)

    if (pesquisa.stat === "fail") {
      console.log("pesquisa falhou")
    } else {
      console.log(pesquisa)
    }
  }

  return (
    <div className="SearchNavbar">
      <Navbar expand="lg" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">Flickr</Navbar.Brand>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <InputGroup>
              <FormControl
                placeholder="Pesquisar fotos"
                aria-label="Pesquisar"
                onChange={handleChangeSearch}
              />
              <Button variant="secondary">Pesquisar</Button>
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default SearchNavbar;
