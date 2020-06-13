import React, { Component } from 'react'
import Axios from 'axios'
import FormContainer from './../searchForm/formContainer/index'
import { Grid,Divider,Header, Form, Segment, Message, List, Pagination, Button, Icon } from 'semantic-ui-react';


class Home extends Component {
 
    render() {
        return (
            <div>
<Segment style={{margin:'40px'}}>
    <Grid columns={2} relaxed='very'>
      <Grid.Column >
                <h1>Home page</h1>

                </Grid.Column>
    </Grid>

   
  </Segment>
            </div>

        )
    }
}

export default Home