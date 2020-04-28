import React, { Fragment } from 'react'
import SushiWallet from '../components/SushiWallet'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.cash} remaining!
      </h1>
      <SushiWallet addMoney={props.addMoney} amount={props.amount} handleChange={props.handleChange}/>
      <div className="table">
        <div className="stack">
          {
            renderPlates(props.eaten)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table