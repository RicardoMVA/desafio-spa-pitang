import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { IFlickrPhoto } from '../../interfaces/IFlickrPhoto'

const GridFotos : React.FC<any> = (props: {fotos: IFlickrPhoto[]}) => {
  return (
    <div className="GridFotos">
      <Container fluid="lg">
        <Row>
          {props.fotos && props.fotos.map((foto: IFlickrPhoto) => (
            <Col style={{margin: '1rem 0'}}>              
              <Card key={foto.id} className="mx-auto" style={{ width: '18rem' }}>
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
            </Col>
          ))}
        </Row>
      </Container>              
    </div>
  );
}

export default GridFotos;
