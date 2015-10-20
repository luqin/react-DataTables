import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'datatables-bootstrap/css/dataTables.bootstrap.css';
import 'jquery';
import 'bootstrap';
import {
  Navbar,
  NavBrand,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Navbar inverse toggleNavKey={0}>
          <NavBrand>React-DataTables</NavBrand>
          <Nav eventKey={0}> {/* This is the eventKey referenced */}
            <NavItem eventKey={1} href="#">Getting started</NavItem>
            <NavDropdown title="Examples" id="collapsible-navbar-dropdown">
              <MenuItem eventKey="1" href="#examples/basic">Basic</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="https://github.com/luqin/react-DataTables" target="_blank">GitHub</NavItem>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    );
  }
}

export default App;
