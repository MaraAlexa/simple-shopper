import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable } from 'mobx'
import { withRouter } from 'react-router-dom'

import '../styles/LoginPage.css'

@inject('user')
@observer class LoginPage extends React.Component {
  @observable loginMessage = null

  componentWillMount() {
    this.props.user.signIn()
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const email = this.email.value
    const password = this.password.value
    this.props.user.signIn(email, password)
  }

  render(){
    return (
      <form className="sign-in-form column is-half is-offset-one-quarter"
            onSubmit={this.handleSubmit}>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left has-icons-right">
            <input ref={input => this.email = input} className="input" type="text" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope"></i>
              </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input
              ref={input => this.password = input}
              className="input"
              type="password"
              placeholder="Password"
            />
              <span className="icon is-small is-left">
                <i className="fa fa-lock"></i>
              </span>
          </div>
        </div>

        <div className="control">
          <button className="login button is-primary is-pulled-right">Log In</button>
        </div>
      </form>

    )
  }
}

export default withRouter(LoginPage)
