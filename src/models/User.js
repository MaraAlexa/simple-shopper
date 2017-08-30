import { observable, action } from 'mobx'
import createHashHistory from 'history/createHashHistory'

import Api from '../api/index'

const history = createHashHistory()

class User {
  sessions = '/sessions'

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

  @action signIn(email = null, password = null) {
    const store = {
      email: localStorage.getItem('email'),
      authentication_token: localStorage.getItem('token')
    }

    // check localStorage for auth credentials
    if(store.email && store.authentication_token) {
      this.signInFromStorage(store.email)
    }
    else if(email && password) {
      this.createSession(email, password)
    }
    else {
      this.signOut()
    }
  }

  @action async signInFromStorage(email) {

    const response = await Api.get(this.sessions)
    const status = await response.status

    if(status === 200) {
      this.email = email
      this.authenticated = true
      this.isLoading = false
      history.push('/admin')
    }
    else {
      // clear out the localStorage data
      this.localStorage.removeItem('email')
      this.localStorage.removeItem('token')
      // set auth to none so user can log in again
      this.email = null
      this.authenticated = false
      this.isLoading = false
      // redirect to login Page
      history.push('/login')
    }
  }

  async createSession(email, password) {
    this.setIsLoading(true)

    const response = await Api.post(
      this.sessions,
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

    const response = await Api.delete(this.sessions)
    const status = await response.status

    if(status === 200) {
      this.setIsLoading(false)
      this.signOut()
    }
  }

  @action SignOut() {
    localStorage.removeItem('email')
    localStorage.removeItem('token')
    this.email = null
    this.authenticated = false
    this.isLoading = false
    history.push('/login')
  }
}

export default new User()
