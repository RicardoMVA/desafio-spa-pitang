import React from 'react';
import { render, screen, fireEvent, wait } from '@testing-library/react';

import App from './App';
import SearchNavbar from './components/SearchNavbar';
import GridFotos from './components/GridFotos';
import ModalFoto from './components/GridFotos/ModalFoto';

import { IFlickrPhoto } from './interfaces/IFlickrPhoto'

const fotos : IFlickrPhoto[] = [
  {
    farm: 66,
    id: "51259395182",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "112236596@N06",
    secret: "23713a25d5",
    server: "65535",
    title: "Yorkshire Dales Hide - 18 June (25) Great Spotted Woodpecker"
  },
  {
    farm: 66,
    id: "51260874189",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "55578087@N08",
    secret: "0c387fa882",
    server: "65535",
    title: "UK - Kent - Near West Farleigh - River Medway"
  },
  {
    farm: 66,
    id: "51259412852",
    isfamily: 0,
    isfriend: 0,
    ispublic: 1,
    owner: "146944795@N03",
    secret: "c435eb01b2",
    server: "65535",
    title: "20210606 - Cabin in the Clouds"
  },
]

test('página Main carrega navbar search', () => {
  render(<App />);
  const inputField = screen.getByRole('textbox');
  expect(inputField).toBeInTheDocument();
});

test('página Main carrega texto de início', () => {
  render(<App />);
  const descricaoInicial = screen.getByText(/Pesquise algo para começar/i);
  expect(descricaoInicial).toBeInTheDocument();
});

test('página Main carrega imagem de fundo', () => {
  render(<App />);
  const imagemLupa = screen.getByAltText('lupa sobre imagem')
  expect(imagemLupa).toHaveAttribute('src', './search-image.png')
});

test('search navbar executa função passando valor digitado', async () => {
  let result;

  function runSearch(searchText: string) {
    result = searchText;
  }

  render(<SearchNavbar handleSubmit={runSearch} />);
  const inputField = screen.getByRole('textbox');
  const submitBtn = screen.getByRole('button');
  fireEvent.change(inputField, { 'target': { 'value': 'forest' } });
  fireEvent.click(submitBtn);
  
  expect(result).toBe('forest')
});

test('grid fotos exibe cards com fotos usando dados', async () => {
  render(<GridFotos fotos={fotos} />);
  const cardsFotos = screen.getAllByRole('img');
  
  expect(cardsFotos.length).toBe(3)
});

test('modal foto exibe foto usando dados', async () => {
  render(<ModalFoto foto={fotos[0]} show={true} />);

  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src', `https://live.staticflickr.com/${fotos[0].server}/${fotos[0].id}_${fotos[0].secret}_b.jpg`)
});