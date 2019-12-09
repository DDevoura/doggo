import React, { Component } from "react";
import axios from "axios";
import paww from "./paww.png";

class App extends Component {
  state = {
    dogs: []
  };
  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
      this.setState({
        dogs: Object.keys(res.data.message)
      });
    });
  }

  render() {
    return (
      <div className="App">
        <img className="paw" src={paww} />
        <h1 className="dick">shit doggo app</h1>
        <select className="menu">
          {this.state.dogs.map(dog => {
            return <option value={dog}>{dog}</option>;
          })}
        </select>
        <p>
          use this shit doggo app to look at cute doggos without actually seeing
          any doggos.
        </p>
      </div>
    );
  }
}
export default App;
