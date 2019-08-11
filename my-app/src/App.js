import React,{Component} from 'react';
import Ninjas from './Ninjas';

class App extends Component {

  state = {
      ninjas : [
        { name : "nikhil", 'age' : 27, 'belt' : 'black' ,id : 1 },
        { name : "david", 'age' : 24, 'belt' : 'green' ,id : 2 },
        { name : "jane", 'age' : 25, 'belt' : 'red' ,id : 3 }
      ]
  }
  render() {
  return (
    <div className="App">
    <h1> My first react app </h1>
    <Ninjas ninjas = {this.state.ninjas}/> 
    </div>
  );
}

}
export default App;
