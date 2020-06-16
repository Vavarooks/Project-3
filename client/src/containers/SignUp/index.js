import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, length, required } from 'redux-form-validators';
import axios from 'axios';

import { AUTH_USER, AUTH_USER_ERROR } from '../../actions/types';

class SignUp extends Component {

  renderEmail = ({input,meta}) => {
    // console.log(meta);
    return(
      <Form.Input
      {...input}
      error={meta.touched && meta.error}
      fluid
      icon='user'
      iconPosition='left'
      autoComplete='off'
      placeholder='Email Address'
      />
    )
  }
  onSubmit = async (formValues,dispatch) => {
    console.log(formValues)
    // console.log(formsProps)
    try {
      const { data } = await axios.post('/api/auth/signup', formValues);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      console.log('reached')
      this.props.history.push('/watchlist');
    } catch (e) {
      dispatch({ type: AUTH_USER_ERROR, payload: e });
    }
  }

  // renderEmail = ({ input, meta }) => {
  //   return (
  //     <Form.Input
  //       {...input}
  //       error={ meta.touched && meta.error }
  //       fluid
  //       icon='user'
  //       iconPosition='left'
  //       autoComplete='off'
  //       placeholder='Email Address'
  //     />
  //   );
  // }


  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        error={meta.touched && meta.error }
        fluid
        type='password'
        icon='lock'
        placeholder='password'
        autoComplete='off'
        iconPosition='left'
      />
    );
  }

  render() {
    // console.log("Inside of signup render", this.props);
     const {handleSubmit, invalid, submitting, submitFailed} = this.props;
    return (
      // onSubmit={handleSubmit(this.onSubmit)}
     <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
        <Segment stacked>
          <Field
          name='email'
          component={this.renderEmail}
          validate={[
            required({msg: 'Email is required'}),
            email({msg: 'You must provide a valid email address'})
          ]}
          />
          <Field
          name='password'
          component={this.renderPassword}
          validate={[
            required({msg:'You must provide a Password'}),
            length({min:6,msg:'Your password must be at least 6 characters long'})
          ]}
          />
          <Button
          content="Sign Up"
          color="blue"
          fluid
          size="large"
          type="submit"
          disabled={ invalid || submitting || submitFailed }
          />
        </Segment>
      </Form>





      // <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
      //   <Segment stacked>
      //     <Field
      //       name='email'
      //       iscool='mannyiscool'
      //       component={ this.renderEmail }
      //       validate={
      //         [
      //           required({ msg: 'Email is required' }),
      //           email({ msg: 'You must provide a valid email address' })
      //         ]
      //       }
      //     />
      //     <Field
      //       name='password'
      //       component={this.renderPassword}
      //       validate={
      //         [
      //           required({ msg: 'You must provide a password' }),
      //           length({ min: 6, msg: 'Your password must be at least 6 characters long' })
      //         ]
      //       }
      //     />
      //     <Button
      //       content='Sign up'
      //       color='teal'
      //       fluid
      //       size='large'
      //       type='submit'
            // disabled={ invalid || submitting || submitFailed }
      //     />
      //   </Segment>
      // </Form>
    );
  }
}

const asyncValidate = async ({email})=>{
  try {
    const {data}=await axios.get(`/api/user/emails?email=${email}`);
    if(data){
      throw new Error();
    }
  } catch (e) {
    throw{email:'email is already taken'};
  }
}
// const asyncValidate = async formValues => {
//   try {
//     const { data } = await axios.get(`/api/user/emails`);
//     const foundEmail = data.some((user)=>(user.email === formValues.email))
//     if(foundEmail){
//       throw new Error();
//     }
//     // ?email=${formValues.email}
//     // if (data) {
//     //   throw new Error();
//     // }
//   } catch (e) {
//     throw { email: 'Email already exists, please sign up with a different email' };
//   }
// }
// export default reduxForm({form:'signup'})(SignUp)
export default reduxForm({ form: 'signup', asyncValidate, asyncChangeFields: [ 'email' ] })(SignUp);
// export default SignUp;