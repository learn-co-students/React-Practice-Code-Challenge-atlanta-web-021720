import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi"

const SushiContainer = (props) => {
  let allSushi = props.allSushi
  let startIndex = props.sushiStartIndex
  let sliceIndex = props.sushiSliceIndex
  return (
    <Fragment>
      <div className="belt">
        {
          allSushi.slice(startIndex, sliceIndex).map(singleSushi => {
            return <Sushi sushi={singleSushi} handleSushiClick={props.handleSushiClick} />
          })
        }
        <MoreButton handleMoreSushi={props.handleMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer