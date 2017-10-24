import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Segment,
  Container,
  Header,
  Grid,
  Icon,
  Button,
} from 'semantic-ui-react';

export default class Hero extends React.PureComponent {
  static propTypes = {
    handleClick: PropTypes.func.isRequired,
  }

  render() {
    const {
      handleClick,
    } = this.props;

    return (
      <StyledSegment inverted textAlign='center' vertical>
        <Container text>
          <Grid container stackable verticalAlign='middle' centered>
            <Grid.Row>
              <StyledHeader as='h1' icon inverted>
                <StyledIcon className='fa-fast-forward'/>
                <StyledLogo>PRESTO</StyledLogo>
                <Header.Subheader>Opinionated react starter project</Header.Subheader>
              </StyledHeader>
            </Grid.Row>

            <Grid.Row>
              <Button type="button" primary size='huge' onClick={handleClick}>
                <Icon name='down arrow'/>
                View details
              </Button>
            </Grid.Row>
          </Grid>
        </Container>
      </StyledSegment>
    );
  }
}

const StyledSegment = styled(Segment)`
  min-height: 700px;
  padding: 1em 0em;
`;

const StyledHeader = styled(Header)`
  font-size: 4em !important;
  font-weight: normal !important;
  margin-bottom: 0 !important;
  margin-top: 2em !important;
`;

const StyledIcon = styled(Icon)`
  border-bottom: 1px solid white;
`;

const StyledLogo = styled.span`
  font-family: 'Nosifer', cursive;
`;
