import React, { Component } from 'react';
import { Nav } from 'react-bootstrap'; 
import '../css/styles.css';


export default class Navigation extends Component {
    render() {
        return (
            <Nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
 // activeKey="/home"
  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item className ="navHeader">
    <Nav.Link href="/">App de Notas</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/create">Crear Nota</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/user">Crear Usuario</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/edit/:id">crear nota</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="disabled" disabled>
      Disabled
    </Nav.Link>
  </Nav.Item>
</Nav>
        )
    }
}
