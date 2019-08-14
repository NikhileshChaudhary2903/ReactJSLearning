import React,{Component} from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
      ninjas : [
        { name : "nikhil", 'age' : 27, 'belt' : 'black' ,id : 1 },
        { name : "david", 'age' : 24, 'belt' : 'green' ,id : 2 },
        { name : "jane", 'age' : 25, 'belt' : 'red' ,id : 3 }
      ]
  }

  addNinja = (ninja) => {
    // console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas,ninja];
    this.setState({
      ninjas : ninjas
    });
  }
  
  deleteNinja = (id) => {
    // console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    })

    this.setState({
      ninjas : ninjas
    });
  }

  // Lifecycle hook when page refreshes or restarts
  componentDidMount() {
    console.log('component mounted');
  }
  // whenver state changes ie you add or remove any ninja
  componentDidUpdate(prevProps,prevState) {
    console.log('component updated');
    console.log(prevProps);
    console.log(prevState);
    
  }

  render() {
  return (
    <div className="App">
    <h1> My first react app </h1>
    <Ninjas deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas} /> 
    <AddNinja addNinja = {this.addNinja}/>
    </div>
  );
}

}
export default App;
