import React from 'react'

export default function FridgeDisplay(props) {
    const {items} = props
    const imgURL = 'https://spoonacular.com/cdn/ingredients_100x100/'

    const tmspToDate = (timestamp) => {
        
        const date = new Date(Number(timestamp)*1000)
        return date.toDateString();
    }

    const expStatusColor = timestamp => {
        const tmspMs = Number(timestamp)*1000
        if(tmspMs > Date.now() + (1000 * 60 * 60 * 24 * 7)){
            return "bg-success"
        } else if (tmspMs < Date.now()){
            return "bg-danger"
        } else {
            return "bg-warning"
        }
    }

  return (
  
    <div className='row'>
        <h4>My Fridge</h4>
        {items.map(grocery => (
            <div className='col-sm-3 my-3'>
                <div class="card" style={{width: '15rem'}}>
                <p class={`card-header ${expStatusColor(grocery["expirationDate"])} text-white`}>Expires {tmspToDate(grocery['expirationDate'])}</p>
                <img class="card-img-top" src={imgURL + grocery['image']} alt={grocery["name"]} width="100px"/>
                <div class="card-body">
                    <h5 class="card-title">{grocery['item']} ({grocery['amount']})</h5>
                    <div className="mt-2">
                        <h6 class="card-subtitle mb-2 text-muted">Bought {tmspToDate(grocery['buyDate'])}</h6>
                      
                    </div>
                </div>
                </div>
            </div>
        ))}
    </div>
  )
}
