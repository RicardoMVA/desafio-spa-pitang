import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IFlickrPhoto } from '../../../interfaces/IFlickrPhoto'
import "./style.css";

const ModalFoto : React.FC<any> = (props: {foto: IFlickrPhoto, show: boolean, onHide: Function}) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modal-foto-header">
        <Modal.Title 
          id="contained-modal-title-vcenter"
          className="modal-foto-title"
        >
          {props.foto && props.foto.title ? props.foto.title : "Sem título"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img 
          src={`https://live.staticflickr.com/${props.foto && props.foto.server}/${props.foto && props.foto.id}_${props.foto && props.foto.secret}_b.jpg`}
          className="modal-foto-body"
        />
      </Modal.Body>
      <Modal.Footer className="modal-foto-footer">
        <Button 
          variant="secondary"
          onClick={() => props.onHide()}
        >
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalFoto;