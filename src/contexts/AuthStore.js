import React, { Component } from 'react';

const USER_STORAGE_KEY = 'current-user';
const AuthContext = React.createContext();

class AuthStore extends Component {
  state = {
    user: JSON.parse(localStorage.getItem(USER_STORAGE_KEY) || '{}')
  }

  handleUserChange = (user) => {
    this.setState({
      user: user
    })
    if (user) {
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user))
    } else {
      localStorage.removeItem(USER_STORAGE_KEY)
    }
  }

  render() {
    return (
      <AuthContext.Provider 
        value={{ 
          user: this.state.user, 
          onUserChange: this.handleUserChange 
        }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthStore
export { AuthContext }