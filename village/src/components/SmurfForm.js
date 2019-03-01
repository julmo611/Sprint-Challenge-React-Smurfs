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
      name: name,
      age: age,
      height: height
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
      // eslint-disable-next-line 
        [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      });
    }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            name="name"
            onChange={this.handleChange}
            type="string"
            placeholder="name"
            value={this.state.name}
          />
          <input
            type="number"
            onChange={this.handleChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            type="string"
            onChange={this.handleChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
