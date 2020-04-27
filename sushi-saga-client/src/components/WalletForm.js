import React from "react"

export default class Form extends React.Component {
    render() {
        return (
            <div className="formAndHeading">
                <h1>Welcome to City Sushi!!</h1>
                <form>
                    <span className="formtext">Add More Funds</span>
                    <input
                        name="newFunds"
                        type="text"
                        placeholder="Enter Amount to Add..."
                        required
                    />
                    <button onClick={this.props.handleFundsClick}>Add Funds!</button>
                </form>
            </div>
        );
    }
}