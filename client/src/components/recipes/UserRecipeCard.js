import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip';

export default function UserRecipeCard(props) {
  const [toggleCard, setToggleCard] = useState(false)
  const {recipe} = props
  return (
    <ReactCardFlip isFlipped={toggleCard} flipDirection="vertical">
    <div class="card" style={{"width": "18rem"}}>
      
        <div class="card-body">
        
            <h5 class="card-title">{recipe['title']}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{recipe['maxReadyTime']} minutes</h6>
            <p class="card-text">{recipe['description']}</p>
            <button onClick={() => setToggleCard(true)} class="btn btn-primary">See Instructions</button>
            
        </div>
    </div>
    <div class="card" style={{"width": "18rem"}}>
      
        <div class="card-body">
    
            <p class="card-text">{recipe['instructions']}</p>
            <button onClick={() => setToggleCard(false)} class="btn btn-danger">Go Back</button>
            
        </div>
    </div>
    </ReactCardFlip>
  )
}
