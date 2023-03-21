import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ToFridgeModal({ show, close, onSubmit }) {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const form_props = Object.fromEntries(form_data);
    onSubmit(form_props)

  }

  return (
    <>

      <Modal show={show} onHide={close}>
        <Modal.Header closeButton>
          <Modal.Title>Move to Fridge</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} method="POST">
          <Modal.Body>

            <div class="mb-3">
              <label for="buyDate">Buy Date : </label>
              <input className="form-control" type="date" name="buyDate" id='buyDate' required/>
              <label for="expDate">Expiration Date : </label>
              <input className="form-control" type="date" name="expirationDate" id='expDate' required/>
            </div>


          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
              Close
            </Button>
            <Button variant="success" type='submit'>
              Confirm
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
