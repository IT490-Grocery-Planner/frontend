import axios from 'axios';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function RatingModal({selection, close, show}) {

    const [rating, setRating] = useState(1)

    const handleSubmit = async () => {
      const saveData = {...selection, rating}
      const session = JSON.parse(sessionStorage.getItem("session"));
      
      const res = await axios.post("/api/index.php", {"type": "saveRecipe", "sessionID": session["sessionID"], "recipe": saveData})
      console.log("save_recipe", res)
      
      close()
      setRating(1)
    }
    return (
      <>
    
        <Modal show={show} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Save Recipe</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <select class="form-control" onChange={e => setRating(Number(e.target.value))}>
                <option disabled>Rate This Recipe</option>
                <option value={1}>1 Star</option>
                <option value={2}>2 Stars</option>
                <option value={3}>3 Stars</option>
                <option value={4}>4 Stars</option>
                <option value={5}>5 Stars</option>
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={close}>
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
