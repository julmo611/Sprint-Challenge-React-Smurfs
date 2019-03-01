import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    const { name, age, height } = this.state;
    event.preventDefault();
    // add code to create the smurf using the api

    axios
    .post('http://localhost:3333/smurfs', {
      name,
      age,
      height
    })
    .then(
    this.setState({
      name: '',
      age: '',
      height: ''
    }))
    .then((res) => {
      this.props.handleUpdate(res.data)
    })
    .catch(err => console.log(err, "post error"))
  }

  handleChange = e => {
    this.setState({
        [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      });
    }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
            name="age"
            type="number"
          />
          <input
            onChange={this.handleChange}
            placeholder="height"
            value={this.state.height}
            name="height"
            type="string"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
