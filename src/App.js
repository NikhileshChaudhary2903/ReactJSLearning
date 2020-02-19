import React from 'react';
import Items from './Items'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: "Bread", id: 1, price: 10, isDisplayed: true },
        { name: "Milk", id: 2, price: 20, isDisplayed: true },
        { name: "Biscuits", id: 3, price: 5, isDisplayed: true },
      ]
    }
  }

  toggleItem = (id) => {
    let newList = this.state.items.map(item => item.id === id ? { id: item.id, name: item.name, price: item.price, isDisplayed: !item.isDisplayed } : item);
    this.setState({
      items: newList
    })
  }
  render() {
    const { items } = this.state;

    return (
      <div className="App" >
        <h1> My list of Items </h1>
        <Items items={items} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
