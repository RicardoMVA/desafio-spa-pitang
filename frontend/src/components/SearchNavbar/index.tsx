import { useState } from 'react';

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup"
import "./style.css";

const SearchNavbar : React.FC<any> = (props: {handleSubmit: Function}) => {
  const [searchText, setSearchText] = useState("");

  const handleChangeSearch = (input: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchText(input.currentTarget.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    document.documentElement.scrollTop = 0

    props.handleSubmit(searchText)
  }

  return (
    <div className="search-navbar">
      <Navbar expand="lg" variant="dark" bg="dark" fixed="top">
        <Container>
          <Navbar.Brand href="https://www.flickr.com/" className="search-navbar-brand">
            <img src="/favicon.ico" className="search-navbar-brand-img" alt="logo do flickr"/>
            flickr
          </Navbar.Brand>
          <Form className="search-form" onSubmit={handleSubmit}>
            <InputGroup size="sm">
              <Button 
                type="submit" 
                variant="secondary"
                className="search-button"
              >
                <img src="/loupe.png" className="search-img" alt="lupa de pesquisa"/>
              </Button>
              <FormControl
                placeholder="Pesquisar fotos"
                aria-label="Pesquisar"
                className="search-form-control"
                onChange={handleChangeSearch}
              />
            </InputGroup>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default SearchNavbar;
