const ref = {
  form: document.querySelector(".login-form"),
};

ref.form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const emailInput = ref.form.elements.email;
  const passwordInput = ref.form.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Заповніть, будь ласка, всі поля форми."); 
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };
      
    console.log(formData);

    ref.form.reset();
  }
}
console.dir(ref.form);
