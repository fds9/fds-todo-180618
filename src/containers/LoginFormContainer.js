import React from 'react';
import {Redirect} from 'react-router-dom';

import LoginForm from '../components/LoginForm';
import {UserConsumer} from '../contexts/UserContext';
import OnMount from '../components/OnMount';
import withUser from '../hocs/withUser';

class LoginFormContainer extends React.Component {
  state = {
    success: false
  };
  render() {
    const {login} = this.props;
    if (this.state.success) {
      return (
        <Redirect to="todo" />
      )
    } else {
      return (
        <LoginForm onLogin={async (username, password) => {
          await login(username, password);
          this.setState({success: true});
        }} />
      )
    }
  }
}

export default withUser(LoginFormContainer);