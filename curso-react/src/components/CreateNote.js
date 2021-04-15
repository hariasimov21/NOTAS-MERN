import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import { Button } from "react-bootstrap";
import "../css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
registerLocale('es', es);


export default class CreateNote extends Component {
  state = {
    users: [],
    userSelected: "",
    title: "",
    content: "",
    date: new Date()
  };

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const res = await axios.get("http://localhost:3000/api/users");
    this.setState({ users: res.data.map((user) => user.username) });
  };

  onSubmit = (e) => {
    e.prevenDefault();
  };

  onInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

   onDateChange = (date) => {
   this.setState({date})
  };



  render() {
    return (
      <div className="col-md-6 offset-md-3 notas">
        <div className="card card-body">
          <h4> Create a Note</h4>
          <div className="form-group">
            <select
              className="form-control"
              name="userSelected"
              onChange={this.onInputChange}
            >
              {this.state.users.map((user) => (
                <option key={user} value={user}>
                  {user}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
              <input type="text" 
              className="form-control"
               placeholder="title" 
               name="title"
               onChange={this.onInputChange}
               required/>
          </div>

          <div className="form-group">
              <textarea className="form-control" 
              placeholder="Content"
              onChange={this.onInputChange}
              required >

              </textarea>
          </div>

          <div className="form-group">
              <DatePicker className="form-control"
              selected={this.state.date}
              onChange={this.onDateChange}
              dateFormat="dd/MM/yyyy"
              locale="es"
              />
          </div>

          <form onSubmit={this.onSubmit}>
            <Button type="submit" variant="primary" size="lg">
              Create Note
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
