import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function UserRecipeModal(props) {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form_data = new FormData(e.target);
    const form_props = Object.fromEntries(form_data);
    props.onSubmit(form_props)

  }

  return (
    <>

      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Save Recipe</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit} method="POST">
        <Modal.Body>
          
            <div class="mb-3">
              <input type="text" class="form-control me-2" name="title" placeholder="Tile" />
              <input type="number" class="form-control" name="maxReadyTime" placeholder="Max Time" />
            </div>
            <div class="mb-3">
              <textarea class="form-control" placeholder="Recipe Description..." name="description" rows="2"></textarea>
            </div>
            <div class="mb-3">
              <textarea class="form-control" placeholder="Recipe Instructions..." name="instructions" rows="4"></textarea>
            </div>
           
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="success" type='submit'>
            Save Recipe
          </Button>
        </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
