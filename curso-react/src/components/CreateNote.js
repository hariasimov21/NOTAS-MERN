import React, { Component } from 'react';
import axios from "axios";

export default class CreateNote extends Component {

/* state = {
    notes = [],
    title = "",
    content = "",
    date = Date,
    author = "" 
};

async componentDidMount(){
    const res = await axios.get('http://localhost:3000/api/users');
    this.setState({notes: res.data})
} */

/* onChangeNotename = (e) => {
    this.setState({
      title: e.target.value,
    });
  }; */

    render() {
        return (
            <div>
                CreateNote
            </div>
        )
    }
}
