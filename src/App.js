import React, { Component } from "react";
import axios from "axios";
import paww from "./paww.png";

class App extends Component {
  state = {
    dogs: [],
    currentDog: "",
    currentImg: ""
  };
  componentDidMount() {
    axios.get("https://dog.ceo/api/breeds/list/all").then(res => {
      this.setState({
        dogs: Object.keys(res.data.message)
      });
    });
  }

  getImages = doggo => {
    axios.get(`https://dog.ceo/api/breed/${doggo}/images/random`).then(res => {
      this.setState({
        currentImg: res.data.message
      });
      return res.data.message;
    });
  };

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      currentDog: e.target.value,
      currentImg: this.getImages(e.target.value)
    });
  };

  render() {
    console.log(this.state.currentDog);
    console.log(this.state.currentImg);
    return (
      <div className="App">
        <img className="paw" src={paww} />
        <h1 className="dick">shit doggo app</h1>
        <p>
          doggo is cute, doggo is great, doggo bark bark woof, <br /> cute doggo
          wag tail, wag waggy bark woof dog.
        </p>
        <select className="menu" onChange={this.handleChange}>
          {this.state.dogs.map(dog => {
            return <option value={dog}>{dog}</option>;
          })}
        </select>
        <img className="dogimg" src={this.state.currentImg} />
      </div>
    );
  }
}
export default App;
