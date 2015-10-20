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
  MenuItem,
  Grid,
  Row,
  Col
} from 'react-bootstrap';

class App extends React.Component {

  static propTypes = {
    children: React.PropTypes.node,
  };

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
          <NavBrand><a href="#">React-DataTables</a></NavBrand>
          <Nav eventKey={1}>
            <NavItem eventKey={1} href="#getting-started">Getting started</NavItem>
            <NavDropdown title="Examples" id="collapsible-navbar-dropdown">
              <MenuItem eventKey="1" href="#examples/basic">Basic</MenuItem>
              <MenuItem eventKey="1" href="#examples/complex-headers">Complex headers</MenuItem>
              <MenuItem eventKey="1" href="#examples/javascript-sourced-data">Javascript sourced data</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="https://github.com/luqin/react-DataTables" target="_blank">GitHub</NavItem>
          </Nav>
        </Navbar>
        <Grid fluid>
          <Row>
            <Col md={12}>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
