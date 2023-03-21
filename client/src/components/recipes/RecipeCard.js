import React from 'react'

export default function RecipeCard({recipe, children}) {
  
  return (
    <div className="card" style={{"width": "18rem"}}>
        <img className="card-img-top" src={recipe['image']} alt={recipe['title']} width="100"/>
        <div className="card-body">
            <h5 className="card-title">{recipe['title']}</h5>
            <div className="d-grid mx-auto">
            <a href={recipe['sourceUrl']} rel="noreferrer" target="_blank" class="btn btn-primary btn-sm">See Recipe</a> 
            </div>
        </div>
        <div className='card-footer'>{children}</div>
    </div>
  )
}
