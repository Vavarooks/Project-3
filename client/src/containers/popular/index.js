import React, { Component } from 'react';
import { List, Header, Message } from 'semantic-ui-react';
// Message third paramater
import { connect } from 'react-redux';
import { getAllTodos } from '../../actions/stocks';
// import {renderList} from './../rendernewList'
// import moment from 'moment';
import DeleteTodoModal from './../../components/DeleteModal';
import { Table } from 'semantic-ui-react'
import FormContainer from './../searchForm/formContainer/index'

class AllTodosList extends Component {
  componentDidMount() {
    console.log("Inside of componentDidMount");
    this.props.getAllTodos();
  }

  // renderList = () => {
  //   console.log(this.props)
  //   if (this.props.allTodos.length === 0) {
  //     return <Header content='No stocks yet'/>;
  //   } else {
  //     return this.props.allTodos.map(({ _id, text, dateCreated}) => {
  //       return (
  //         <List.Item key={_id}>
  //           <List.Content>
  //             <List.Header>{text}</List.Header>
  //             <List.Description>{moment(dateCreated).fromNow()}</List.Description>
  //           </List.Content>
  //         </List.Item>
  //       );
  //     });
  //   }
  // }

  renderList = () => {
  
    return(
   <div>

  
     <Table singleLine>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell>Stock Name</Table.HeaderCell>
          <Table.HeaderCell>Date</Table.HeaderCell>
         
        </Table.Row>
      </Table.Header>
      <Table.Body>
       
  {this.props.allTodos.map(({_id,text,dateCreated})=>(
     <Table.Row key={_id}>
         <Table.Cell> <h3>{text}</h3></Table.Cell>
         <Table.Cell>{dateCreated}</Table.Cell>
   
        </Table.Row>
   ))}
      
      </Table.Body>
     </Table>
  
   
  
   </div>
  
    )
  };
   

  render() {
    console.log(this.props);
    return (
      <List celled selection size='huge'>
        {this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null}
      { this.renderList() }

       </List>
    );
  }
}

function mapStateToProps(state) {
  return { allTodos: state.todos.allTodos, getAllTodosError: state.todos.getAllTodosError };
}

export default connect(mapStateToProps, { getAllTodos })(AllTodosList);

// export default AllTodosList;


// { this.props.getAllTodosError ? <Message negative header={this.props.getAllTodosError}/> : null }
// { this.renderList() }


// folder name = AllTodosList