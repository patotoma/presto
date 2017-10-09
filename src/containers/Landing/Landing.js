import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Grid,
  Row,
  Col,
  Clearfix,
  Jumbotron,
  Button,
  Image,
} from 'react-bootstrap';

class Landing extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
  };

  handleClick = () => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <Grid>
        <Row>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p>
              <Button
                type="button"
                bsStyle="success"
                onClick={this.handleClick}
              >ENTER!</Button>
            </p>
          </Jumbotron>
        </Row>

        <Row className="show-grid">
          <Col sm={6} md={3}>
            <StyledImage src="http://via.placeholder.com/120x120" circle/>
            <div><b>First</b></div>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales vestibulum augue, non rhoncus velit accumsan ut. Nunc accumsan, lorem sit amet ultrices eleifend, sapien quam auctor sem, id sagittis nibh erat id augue. Fusce vehicula felis ante. Aliquam sed augue neque. Nam finibus, nulla eget vestibulum gravida, lectus augue.
            </p>
          </Col>
          <Col sm={6} md={3}>
            <StyledImage src="http://via.placeholder.com/120x120" circle/>
            <div><b>Second</b></div>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales vestibulum augue, non rhoncus velit accumsan ut. Nunc accumsan, lorem sit amet ultrices eleifend, sapien quam auctor sem, id sagittis nibh erat id augue. Fusce vehicula felis ante. Aliquam sed augue neque. Nam finibus, nulla eget vestibulum gravida, lectus augue.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales vestibulum augue, non rhoncus velit accumsan ut.
            </p>
          </Col>
          <Clearfix visibleSmBlock/>

          <Col sm={6} md={3}>
            <StyledImage src="http://via.placeholder.com/120x120" circle/>
            <div><b>Third</b></div>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales vestibulum augue, non rhoncus velit accumsan ut. Nunc accumsan, lorem sit amet ultrices eleifend, sapien quam auctor sem, id sagittis nibh erat id augue.
            </p>
          </Col>
          <Col sm={6} md={3}>
            <StyledImage src="http://via.placeholder.com/120x120" circle/>
            <div><b>Fourth</b></div>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sodales vestibulum augue, non rhoncus velit accumsan ut. Nunc accumsan, lorem sit amet ultrices eleifend, sapien quam auctor sem, id sagittis nibh erat id augue. Fusce vehicula felis ante. Aliquam sed augue neque.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

const StyledImage = styled(Image)`
  display: block;
  margin: 10px auto 20px;
`;

export default Landing;
