import React, { Fragment } from 'react'

const SushiWallet = (props) => {

    return (
        <Fragment>
            <h2>Add Money to your Sushi Wallet:</h2>
            <form onSubmit={props.addMoney}>
                <label>
                    Amount:
                    <input type="number" value={props.amount} onChange={props.handleChange}/>
                </label>
                <input type="submit" value="Add"/>
            </form>
        </Fragment>
    )
}

export default SushiWallet