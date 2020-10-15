import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../../utils/auth'

class AuthRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: auth.get()
    }
  }
  render() {
    return this.state.isLogin ?
      <Route {...this.props}></Route> :
      <Redirect to="/login"></Redirect>
  }
}

export default AuthRoute;