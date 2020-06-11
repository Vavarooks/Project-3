import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Grid,Divider,Header, Form, Segment, Message, List, Pagination, Button, Icon } from 'semantic-ui-react';
import FormContainer from './../searchForm/formContainer/index'
import { compose } from 'redux';
  
import axios from 'axios';

import UserTodoListItems from './userWatchListItem';

// import requireAuth from '../../hoc/requireAuth';


import { getUserTodos, updateTodoCompletedById, deleteTodoById } from '../../actions/stocks';

import { ADD_TODO_ERROR, ADD_TODO} from '../../actions/types';

class UserTodoList extends Component {

state={
  activePage:1,
  start:0,
  end:10
}


 

  onSubmit = async (formValues,dispatch) => {
     try {
      await axios.post('/api/user/stock', formValues, { headers: { 'authorization': localStorage.getItem('token')}} );
      dispatch({ type: ADD_TODO });
      this.props.getUserTodos();
    } catch (e) {
      dispatch({ type: ADD_TODO_ERROR, payload: e });
    }
  }


 

  componentDidMount() {
     this.props.getUserTodos();
   }

  renderAddTodo = ({ input, meta }) => {
     return (
      <>
        <Form.Input
          {...input}
          error={ meta.touched && meta.error }
          fluid
          autoComplete='off'
          placeholder='Add your stock'
          icon='dollar'
          iconPosition='left'

        />
      </>
    )
  }


  handlePageChange = (event, data) => {
    console.log(data)
    this.setState({
      activePage: data.activePage,
      start: data.activePage === 1 ? 0 : data.activePage * 10 - 10,
      end: data.activePage * 10
    });
  }


  render() {
     const {handleSubmit} = this.props;
      return(
          <>
<Segment style={{margin:'40px'}}>
    <Grid columns={2} relaxed='very'>
      <Grid.Column >

     
      <FormContainer/>   
 


     </Grid.Column>
      <Grid.Column> 
          



       <Header as="h2" color="blue" textAlign="center" content="watchlist"/>
          <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
              <Segment stacked>
                <Field
                name="text"
                component={this.renderAddTodo}
                />
                <Button
                type='submit'
                fluid
                color='blue'
                content='add'
                />
              </Segment>
              </Form>
              <List animated divided selection>
                <UserTodoListItems 
                todos={this.props.todos.slice(this.state.start,this.state.end)}
                handleUpdate={this.props.updateTodoCompletedById}
                handleDelete={this.props.deleteTodoById}
                />
              </List>
              {
                this.props.todos.length <= 9 ? 
                null
                : <Pagination
                pointing
                secondary
                totalPages={Math.ceil(this.props.todos.length / 10)}
                onPageChange={(event,data)=> this.handlePageChange(event,data)}
                activePage={this.state.activePage}
                />
              }       

              </Grid.Column>
    </Grid>

    <Divider vertical>
     </Divider>
  </Segment>
          </>
      );
  }
//     const { handleSubmit } = this.props;
//     console.log(this.props);
//     return (
//       <>
//         <Header as='h2' color='teal' textAlign='center' content='Welcome to do the todo app'/>
//         <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
//           <Segment stacked>
//             <Field
//               name='text'
//               component={this.renderAddTodo}
//             />
//             <Button
//               type='submit'
//               fluid
//               color='teal'
//               content='Add a todo'
//             />
//           </Segment>
//         </Form>
//         <List animated divided selection>
//           <UserTodoListItems
//             todos={this.props.todos.slice(this.state.start, this.state.end)}
//             handleUpdate={this.props.updateTodoCompletedById}
//             handleDelete={this.props.deleteTodoById}/>
//         </List>
//         {
//           this.props.todos.length <= 9 ?
//             null
//             : <Pagination
//               totalPages={ Math.ceil( this.props.todos.length / 10) }
//               onPageChange={ (event, data) =>  this.handlePageChange(event, data) }
//               activePage={this.state.activePage}
//             />
//         }
//       </>
//     );
//   }
// }

// // function mapStateToProps(state) {
// //   return {
// //     todos: state.todos.userTodos,
// //     clientError: state.todos.getUserTodosClientError,
// //     serverError: state.todos.getUserTodosServerError
// //   };
// // }


// function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError, deleteTodoByIdError}}) {
//   return {
//     todos: userTodos,
//     clientError: getUserTodosClientError,
//     serverError: getUserTodosServerError,
//     deleteTodoByIdError,
//   };
// }

// // const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);


// // 1 way
// // export default reduxForm({ form: 'addTodo' })(connect(mapStateToProps, { getUserTodos })(UserTodoList));

// // 2nd way
// // const composedComponent = connect(mapStateToProps, { getUserTodos })(UserTodoList);
// // export default reduxForm({ form: 'addTodo'})(composedComponent);


// export default compose(
//   reduxForm({ form: 'addTodo' }),
//   requireAuth,
//   connect(mapStateToProps, { getUserTodos, updateTodoCompletedById, deleteTodoById })
// )(UserTodoList);

}

function mapStateToProps({ todos: { userTodos, getUserTodosServerError, getUserTodosClientError, deleteTodoByIdError}}) {
  return {
    todos: userTodos,
    clientError: getUserTodosClientError,
    serverError: getUserTodosServerError,
    deleteTodoByIdError,
  };
}
 export default compose(
  reduxForm({ form: 'addTodo' }),
  connect(mapStateToProps, { getUserTodos,updateTodoCompletedById, deleteTodoById })
)(UserTodoList);




 