import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi" id={props.deets.id}>
      <div className="plate" 
        onClick={() => props.eatSushi(props.deets)}>
      { 
      props.eaten.includes(props.deets) ?
      null
      :
      <img src={props.deets.img_url} width="100%" />
      }
      </div>
      <h4 className="sushi-details">
      {props.deets.name} - ${props.deets.price}
      </h4>
    </div>
  )
}

export default Sushi

