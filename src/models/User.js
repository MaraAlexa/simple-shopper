import { observable, action } from 'mobx'
import createHashHistory from 'history/createHashHistory'

import Api from '../api/index'

const history = createHashHistory()


class User {
  // class attribute
  sessions_path = '/sessions'

  @observable isLoading = false
  @observable authenticated = false
  @observable email = null

  @action setIsLoading(status) {
    this.isLoading = status
  }

  @action setAuthenticated(status, email) {
    this.authenticated = status

    if(status && email) {
      this.email = email
    }
  }

  signIn(email = null, password = null) {
    const store = {
      email: localStorage.getItem('email'),
      authentication_token: localStorage.getItem('token')
    }

    // check localStorage for auth credentials
    if(store.email && store.authentication_token) {
      this.signInFromStorage()
    }
    else if(email && password) {
      // sign in if email and password input
      this.createSession(email, password)
    }
    else {
      this.signOut()
    }
  }

  @action async signInFromStorage(email) {

    const response = await Api.get(this.sessions_path)
    const status = await response.status

    if (status === 200) {
      // check if user is signedIn
      this.email = localStorage.getItem('email')
      this.authenticated = true
      this.isLoading = false
      history.push('/admin')

    } else {
      // clear out localStorage
      localStorage.removeItem('email')
      localStorage.removeItem('token')
      // set auth to none so user can login again
      this.email = null
      this.authenticated = false
      this.isLoading = false
      // Redirect to login
      history.push('/login')
    }


  }

  async createSession(email, password) {
    this.setIsLoading(true)

    const response = await Api.post(
      this.sessions_path,
      {
        email,
        password
      }
    )

    const status = await response.status
    if(status === 201) {
      const body = await response.json()
      localStorage.setItem('token', body.authentication_token)
      localStorage.setItem('email', body.email)
      this.setIsLoading(false)
      this.setAuthenticated(true, body.email)
      history.push('/admin')
    }
    else {
      console.log('error')
    }
  }

  async destroySession() {
    this.setIsLoading(true)

    const response = await Api.delete(this.sessions_path)
    const status = await response.status

    if(status === 200) {
      this.setIsLoading(false)
      this.signOut()
    }
  }

  @action signOut() {
    // cleans up localStorage and redirects
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    this.email = null
    this.authenticated = false
    this.isLoading = false
    history.push('/') // this is not working
  }
}

export default new User()
