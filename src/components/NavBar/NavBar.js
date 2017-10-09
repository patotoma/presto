import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

class NavBar extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
    handleSelect: PropTypes.func.isRequired,
  };

  render() {
    const {
      user,
      handleSelect,
    } = this.props;

    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Presto</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          {user ?
            <Nav pullRight onSelect={handleSelect}>
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                <MenuItem eventKey="home">Home</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="logout">Logout</MenuItem>
              </NavDropdown>
            </Nav>
            :
            <Nav pullRight>
              <Navbar.Text>
                <Link to="/login">Sign in</Link>
              </Navbar.Text>
              <Navbar.Text>
                <Link to="/register">Sign up</Link>
              </Navbar.Text>
            </Nav>
          }
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
