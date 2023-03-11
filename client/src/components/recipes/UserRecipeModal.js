import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function UserRecipeModal(props) {


  const handleSubmit = async (e) => {
    const data = {}
    onSubmit(data)

  }

  return (
    <>

      <Modal show={props.show} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Save Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form role="tabpanel" onSubmit={handleSubmit} method="POST">

            <div class="input-group mb-3">
              <input type="text" class="form-control me-2" name="fname" placeholder="First Name" />
              <input type="text" class="form-control" name="lname" placeholder="Last Name" />
            </div>
            <div class="mb-3">
              <input name="email" type="email" class="form-control" placeholder="Email Address" id="email" />
            </div>
            <div class="mb-3">
              <input name="password" type="password" class="form-control" placeholder="Password" id="password" />
            </div>
            <div class="mb-3">
              <input name="password2" type="password" class="form-control reg-field" placeholder="Confirm Password" id="password2" />
            </div>
            <div class="d-grid gap-2 mb-3">
              <input type="submit" value="Register" class="btn btn-success" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save Recipe
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
