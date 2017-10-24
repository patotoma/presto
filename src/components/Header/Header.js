import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
  Menu,
  Container,
  Button,
  Dropdown,
} from 'semantic-ui-react';

import * as actionTypes from '../../sagas/actionTypes.js';

export class Header extends React.PureComponent {
  static propTypes = {
    user: PropTypes.object,
    history: PropTypes.object.isRequired,
  };

  handleLogout = () => {
    this.props.dispatch({
      type: actionTypes.LOGOUT.request,
    });
  }

  render() {
    const {
      user,
      history,
    } = this.props;

    return (
      <StyledMenu fixed='top' secondary size='large'>
        <Container>
          <Menu.Item as='a'
            onClick={() => { history.push('/'); }}
          >
            <StyledLogo>PRESTO</StyledLogo>
          </Menu.Item>

          {user ?
            <Menu.Item position='right'>
              <StyledDropdown item text={user.name}>
                <Dropdown.Menu>
                  <Dropdown.Item
                    icon='home'
                    text='Home'
                    onClick={() => { history.push('/home'); }}
                  />
                  <Dropdown.Divider/>
                  <Dropdown.Item
                    icon='log out'
                    text='Log out'
                    onClick={this.handleLogout}
                  />
                </Dropdown.Menu>
              </StyledDropdown>
            </Menu.Item>
            :
            <Menu.Item position='right'>
              <Button as='a'
                inverted
                onClick={() => { history.push('/login'); }}
              >Log in</Button>
              <StyledRegisterButton as='a'
                inverted
                color='blue'
                onClick={() => { history.push('/register'); }}
              >Sign Up</StyledRegisterButton>
            </Menu.Item>
          }
        </Container>
      </StyledMenu>
    );
  }
}

const StyledMenu = styled(Menu)`
  background-color: #1b1c1d !important;
  border-bottom: 1px solid white !important;
  height: 50px;
`;

const StyledLogo = styled.span`
  font-family: 'Nosifer', cursive;
  font-size: 1.4em;
  color: white;
`;

const StyledDropdown = styled(Dropdown)`
  color: white !important;
`;

const StyledRegisterButton = styled(Button)`
  margin-left: 0.5em !important;
`;

export default withRouter(connect(state => ({
  user: state.user,
}))(Header));
