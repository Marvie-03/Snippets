function SinInWAdobe (){
    const SignIn = document.getElementById("magento-identity-ui-btn")
    SignIn.click()
  }
  SinInWAdobe()
  
  setTimeout(() => {
    
    const email = 'your-email-address'
    const password = 'yourpassword'
  
  
    const authLocation = '/v2/session/create'
  
    function setValue (selector, value) {
      const element = document.querySelector(selector)
      element.value = value
      element.dispatchEvent(new Event('change'))
    }
  
    function submitForm () {
      document.querySelector('[data-id="EmailPage-ContinueButton"]').click()
    }
  
    function login () {
      try {
        setValue('#EmailPage-EmailField', email)
        setValue("div.credential-hide-helper input[name='passwd']", password)
        submitForm()
      } catch (error) {
        console.warn(error)
        setTimeout(login, 1000)
      }
    }
  
    if (window.location.pathname === authLocation) {
      login()
    }
  }, 2000);