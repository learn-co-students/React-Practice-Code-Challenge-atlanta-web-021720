import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiList: [],
    startIndex: 0,
    eaten: [],
    cash: 100,
    amount: ""
  }

  getPage = () => {
    return this.state.sushiList.slice(this.state.startIndex, (this.state.startIndex + 4))
  }

  clickMore = () => {
    if ((this.state.startIndex + 4) < (this.state.sushiList.length)) {
    this.setState({startIndex: (this.state.startIndex + 4)})
    } else {
      this.setState({ startIndex: (this.state.sushiList.length - (this.state.startIndex + 4))})
      //this should work even if the sushiList were not evenly divided by 4
    }
  }

  eatSushi = sushi => {
    if (!this.state.eaten.includes(sushi)) {
    this.state.cash - sushi.price > 0 ? this.setState({
      eaten: [...this.state.eaten, sushi],
      cash: (this.state.cash - sushi.price)
    }) : null
  }
  }


  addMoney = (event) => {
    event.preventDefault()
    this.setState({ 
      cash: (this.state.cash + parseInt(this.state.amount, 10)),
      amount: ""
    })
  }

  handleChange = e => {
    this.setState({ amount: e.target.value })
}

  componentDidMount() {
    fetch(API)
    .then(r => r.json())
    .then(sushi => this.setState({sushiList: sushi}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushiList={this.getPage()} eaten={this.state.eaten} clickMore={this.clickMore} eatSushi={this.eatSushi}/>
        <Table cash={this.state.cash} eaten={this.state.eaten} addMoney={this.addMoney} handleChange={this.handleChange} amount={this.state.amount}/>
      </div>
    );
  }
}

export default App;