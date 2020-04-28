import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
          {props.sushiList.map(sushi => <Sushi deets={sushi} eaten={props.eaten} eatSushi={props.eatSushi} key={sushi.id}/>)}
        <MoreButton clickMore={props.clickMore}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer