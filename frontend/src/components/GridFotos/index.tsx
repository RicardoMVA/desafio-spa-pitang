import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import { IFlickrPhoto } from '../../interfaces/IFlickrPhoto'

const GridFotos : React.FC<any> = (props: {fotos: IFlickrPhoto[]}) => {
  return (
    <div className="GridFotos">
      <Container fluid="md">
          {props.fotos && props.fotos.map((foto: IFlickrPhoto) => (                
            <Card key={foto.id} style={{ width: '18rem', display: 'inline-block' }}>
              <Card.Img 
                variant="top"
                style={{ height: '18rem', objectFit: 'cover' }}
                src={`https://live.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}_n.jpg`} />
              <Card.Body>
                <Card.Title
                  style={{ height: '3rem', overflow: 'hidden', textOverflow: 'clip' }}
                >
                  {foto.title ? foto.title : "Sem título"}
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
      </Container>              
    </div>
  );
}

export default GridFotos;
