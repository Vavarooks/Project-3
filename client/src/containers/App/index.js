import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
// import NavBar from './../../components/Navbar';
import Winners from '../winners';
import Losers from './../losers'
import AllTodosList from "../popular"
import SignUp from '../SignUp';
import SignIn from '../SignIn';
import UserTodoList from '../userWatchList';
import SignOut from '../SignOut';
import Home from './../home/index';
import NavBar from '../../components/Navbar';

import './../../index.css'

// import Chat from '../chatComponent';


import { connect } from 'react-redux';

// import io from 'socket.io-client';





class App extends Component {
  //
 

  render () {
 
    console.log(this.props)
    return (
      <div>
      <Grid textAlign='center'   verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 700 }}>
          
           <NavBar authenticated={this.props.authenticated}/>

           <Route exact path='/winners' component={Winners}/>
           <Route exact path='/losers' component={Losers}/>

 



           <Route exact path='/signup' component={SignUp}/>
           <Route exact path='/signin' component={SignIn}/>
           <Route exact path='/signout' component={SignOut}/>

           <Route exact path='/popular' component={AllTodosList}/>


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

      {/* <Route exact path='/' component={Home}/> */}

      <Route exact path='/watchlist' component={UserTodoList}/>


</div>
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
