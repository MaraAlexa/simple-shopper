import { observable, action } from "mobx"

class Validations {
  // @observable email = ''
  @observable name = ''
  @observable nameValid = false

  // @observable phone = ''
  // @observable selectedCountry = ''
  // @observable city = ''
  // @observable postalCode = ''
  // @observable address = ''
  // @observable formErrors = {}
  // @observable name = ''

  @action validateName (value) {
    if (value.match(/^[a-zA-Z ]{3,30}$/)) {
      this.nameValid = true
    }

  }


}

export default new Validations()

// form fields validation state
// email: '',
// name: '',
// phone: '',
// selectedCountry: '',
// city: '',
// postalCode: '',
// address: '',
// // formErrors state
// formErrors: {
//   email: '',
//   name: '',
//   phone: '',
//   selectedCountry: '',
//   city: '',
//   postalCode: '',
//   address: ''
// },
// emailValid: '',
// nameValid: '',
// phoneValid: '',
// selectedCountryValid: '',
// cityValid: '',
// postalCodeValid: '',
// addressValid: '',
// // form validation state
// formValid: false
