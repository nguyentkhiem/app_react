import { Button, Table, Modal, Card, Form, Col } from "react-bootstrap";

export default function ModalNotify(props) {
    return (
      <Modal
        {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body style={{padding: 20}}>
          <h4 className="text-success text-center">Success!</h4>
          <p>
            You can see the order in console !
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>OK</Button>
        </Modal.Footer>
      </Modal>
    );
  }