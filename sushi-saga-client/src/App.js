import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from "./components/WalletForm"

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      sushiStartIndex: 0,
      sushiSliceIndex: 4,
      sushiBeenEaten: false,
      currentWallet: 100,
      currentPlatesOnTable: [],
      platesEaten: false
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(allSushi => {
        let updatedSushi = allSushi.map(sushi => {
          return sushi = { ...sushi, hasBeenEaten: false }
        })
        this.setState({ allSushi: updatedSushi })
      })
  }

  handleMoreSushi = () => {
    this.state.sushiStartIndex < 100 ?
      this.setState({
        sushiSliceIndex: this.state.sushiSliceIndex + 4,
        sushiStartIndex: this.state.sushiStartIndex + 4
      })
      :
      this.setState({
        sushiSliceIndex: 4,
        sushiStartIndex: 0
      })
  }

  handleSushiClick = (event) => {
    this.state.currentWallet - event.price < 0 ?
      console.log("Not enuff Mula!") : this.handleSushiStates(event)
  }

  handleSushiStates = (event) => {
    let updatedSushi = event
    updatedSushi.hasBeenEaten = true
    let finalSushi = this.state.allSushi.map(sushi => {
      return sushi.id === updatedSushi.id ? sushi = updatedSushi : sushi
    })
    this.setState({ allSushi: finalSushi })
    this.setState({ currentWallet: this.state.currentWallet - event.price })
    this.setState({ sushiBeenEaten: true })
    this.setState({ platesEaten: true })
    this.setState({ currentPlatesOnTable: [...this.state.currentPlatesOnTable, event] })
  }

  handleFundsClick = (event) => {
    event.preventDefault()
    let newFunds = parseInt(event.target.parentElement.querySelector("input").value)
    this.setState({ currentWallet: this.state.currentWallet + newFunds })
  }

  render() {
    console.log(this.state.currentPlatesOnTable)
    return (
      <div className="app">
        <SushiContainer
          allSushi={this.state.allSushi}
          sushiStartIndex={this.state.sushiStartIndex}
          sushiSliceIndex={this.state.sushiSliceIndex}
          handleMoreSushi={this.handleMoreSushi}
          handleSushiClick={this.handleSushiClick}
          sushiBeenEaten={this.state.sushiBeenEaten}
        />
        <Table
          currentWallet={this.state.currentWallet}
          currentPlatesOnTable={this.state.currentPlatesOnTable}
          platesEaten={this.state.platesEaten}
        />

        <WalletForm handleFundsClick={this.handleFundsClick} />
      </div>
    );
  }
}

export default App;