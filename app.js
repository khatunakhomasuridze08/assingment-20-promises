const signupForm = document.querySelector('#user-signup-form');
const user_id = document.querySelector('#user_id');
const first_name = document.querySelector('#first_name');
const last_name = document.querySelector('#last_name');
const zip = document.querySelector('#zip');
const personal_number = document.querySelector('#personal_number');
const mobile_number = document.querySelector('#mobile_number');
const gender = document.querySelector('#gender');
const email = document.querySelector('#email');
const status = document.querySelector('#status');

signupForm.addEventListener('submit', e => {
    e.preventDefault();
    const userData = {
      id: user_id.value,
      first_name: first_name.value,
      last_name: last_name.value,
      zip: zip.value,
      mobile: mobile_number.value,
      pn: personal_number.value,
      gender: gender.value,
      email: email.value,
      status: status.value,
    };

    // createUser(userData); TODO: თუ user_id.value არის ცარიელი მაშინ უნდა შევქმნათ
  // updateUser(userData); TODO: თუ user_id.value არის მაშინ უნდა დავაედიტოთ


      
  
  console.log('Save user');
});
