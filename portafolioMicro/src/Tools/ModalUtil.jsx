import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const ModalUtil = ({show, onHide,title,body}) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      scrollable
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter " className='text-purple-800'>
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        {body}
                                
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" className='text-center h-10 bg-purple-400 hover:bg-blue-600 text-black font-semibold' onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    
  );
}
