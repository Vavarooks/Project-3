import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import NavBar from './../../components/Navbar';
import Counter from '../home';
import AllTodosList from "./../AllTodosList"
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import UserTodoList from '../UserTodoList';
import SignOut from '../SignOut';
  
// import Chat from '../chatComponent';


import { connect } from 'react-redux';

// import io from 'socket.io-client';



// import Navbar from './../../components/Navbar';


class App extends Component {
  //
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render () {
    const { activeItem } = this.state

    console.log(this.props)
    return (
      <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          
           <NavBar authenticated={this.props.authenticated}/>
           <Route exact path='/home' component={Counter}/>


           {/* <Route exact path='/alltodos' component={AllTodosList}/> */}


           <Route exact path='/' component={SignUp}/>
           <Route exact path='/signin' component={SignIn}/>
           <Route exact path='/signout' component={SignOut}/>
           <Route exact path='/usertodos' component={UserTodoList}/>



          {/* <Navbar isLoggedIn={this.props.authenticated}/>
          <Route exact path='/counter' component={Counter}/>
          <Route exact path='/usertodos' component={UserTodoList}/>
          <Route exact path='/alltodos' component={AllTodosList}/>
          <Route exact path='/chat' component={Chat}/>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signout' component={SignOut}/>
          <Route exact path='/' component={SignUp}/> */}
        </Grid.Column>
      </Grid>
    );
  }
}

// function mapStateToProps(state) {
//   return { counter:state.counter };
// }

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}
// connect(mapStateToProps)
export default connect(mapStateToProps)(App);
