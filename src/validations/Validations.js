import { observable, action } from "mobx"
// begin validations mobX
class Validations {
  // @observable email = ''
  @observable name = ''
  @observable inputIsValid = false
  @observable formValid = false

  // @observable phone = ''
  // @observable selectedCountry = ''
  // @observable city = ''
  // @observable postalCode = ''
  // @observable address = ''
  // @observable formErrors = {}
  // @observable name = ''

  @action validateName (value) {
    if (value.match(/^[a-zA-Z ]{3,30}$/)) {
      this.inputIsValid = true
    } else {
      this.inputIsValid = false
    }

  }

  // @action handleValidation (inputIsValid, value) {
  //   inputIsValid ?
  //     this.inputIsValid = true
  //     :
  //     value.length > 0 ?
  //       this.validateName(value)
  //       :
  //       null
  // }


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
