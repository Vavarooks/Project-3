// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, Segment, Button } from 'semantic-ui-react';
// import { white, orange } from 'color-name';


// export default (props) => (
//    <Menu widths={6} inverted>
//       {/* <Menu.Item as ={Link} to="/home" icon='chart line'content="home"/> */}
 
// {props.authenticated?<Menu.Item  as ={Link} icon='plus'to="/winners" content="Winners" /> : null}
// {props.authenticated?<Menu.Item  as ={Link} icon='minus'to="/losers" content="Losers" />:null}


// {props.authenticated ? null : 
// <Menu.Item><Button primary as ={Link} to="/signup" content="Sign Up"/> </Menu.Item> }



// {props.authenticated ? <Menu.Item as ={Link} to="/watchlist" content="WatchList" icon='eye'/>
// :null }

//  {props.authenticated ? <Menu.Item as ={Link} to="/popular" icon='chart line'content="popular"/>
// :null} 

// {props.authenticated ? <Menu.Item as ={Link} to="/signout" content="Sign out"/> 
// : <Menu.Item> <Button as ={Link} to="/signin" content="Log-in"/></Menu.Item> }
//    </Menu>

 
//  );


import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Segment,Input, Menu } from 'semantic-ui-react'
import './../../index.css'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  render(props) {
    console.log(this.props)

    const { activeItem } = this.state

    return (
       <div className="app"> 
      <Segment inverted>
      <Menu secondary inverted pointing  >
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="#/home"
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />:null}
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="#/winners"
          name='winners'
          active={activeItem === 'winners'}
          onClick={this.handleItemClick}
        />: null}
        {this.props.authenticated?<Menu.Item
          as ={Link}
          to="#/losers"
          name='losers'
          active={activeItem === 'losers'}
          onClick={this.handleItemClick}
        />: null}
        
         {this.props.authenticated ? <Menu.Item
          as ={Link}
          to="#/watchlist"
          name='watchlist'
          active={activeItem === 'watchlist'}
          onClick={this.handleItemClick}
        /> :null }

         {this.props.authenticated ? <Menu.Item
          as ={Link}
          to="#/community"
          name='community'
          icon='users'
          active={activeItem === 'community'}
          onClick={this.handleItemClick}
        /> :null }

        

        <Menu.Menu position='right'>
          {this.props.authenticated?<Menu.Item>
        <Input icon='search' placeholder='Search...' />
          </Menu.Item>:null}

         {this.props.authenticated ? <Menu.Item
            as={Link}
            to="/signout"
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
           /> : <Menu.Item
            as={Link}
            to="/signin"
            name='signin'
            active={activeItem === 'signin'}
            onClick={this.handleItemClick}
         /> }

         {this.props.authenticated ? null : 
          <Menu.Item
          as ={Link}
          to="/signup"
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
         />}


          
        </Menu.Menu>
      </Menu>
      </Segment>
      </div>
    )
  }
}

  
