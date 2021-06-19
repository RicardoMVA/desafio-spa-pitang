import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { IFlickrPhoto } from '../../interfaces/IFlickrPhoto'
import "./style.css";

const GridFotos : React.FC<any> = (props: {fotos: IFlickrPhoto[]}) => {
  return (
    <div className="grid-fotos">
      <Container fluid="lg">
        <Row>
          {props.fotos && props.fotos.map((foto: IFlickrPhoto, index: number) => (
            <Col key={(foto.id + index)} className="grid-fotos-col">              
              <Card className="mx-auto grid-fotos-card">
                <Card.Img 
                  variant="top"
                  className="grid-fotos-card-img"
                  src={`https://live.staticflickr.com/${foto.server}/${foto.id}_${foto.secret}_n.jpg`} />
                <Card.Body className="grid-fotos-card-body">
                  <Card.Title className="grid-fotos-card-title">
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
