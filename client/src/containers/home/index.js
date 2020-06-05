import React, { Component } from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { increment, decrement } from '../../actions/counter';

// import requireAuth from '../../hoc/requireAuth';

class Counter extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column textAlign='center'>
       
        </Grid.Column>
      </Grid>
    );
  }
}

// This takes a key which is what we want the states name to be as props
// The value is what state we want to pull out from the store
function mapStateToProps(state) {
  return { counter: state.counter };
};
// 2nd parameter to connect is what actions we want wired up to this component
// To be sent to all of our reducers



// export default requireAuth(connect(mapStateToProps, { increment, decrement })(Counter));
//
// export default compose(
//   connect(mapStateToProps, { increment, decrement}),requireAuth)(Counter);

export default connect(mapStateToProps,{increment,decrement})(Counter)