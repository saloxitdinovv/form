let form = document.forms.form;
let inputs = form.querySelectorAll(".musted_input");
let btn = document.querySelector(".save");
// let warning = document.querySelectorAll('.fill')
// let warningTwo = document.querySelectorAll('.inp-info')
// let warningThree = document.querySelectorAll(".musted_inp-info");
let suc = document.querySelector(".suc");
let err = document.querySelector(".err");

form.onsubmit = (event) => {
  event.preventDefault();

  let error = false;

  let successes = 0;
  let errors = 0;

  inputs.forEach((inp) => {
    if (inp.value.length === 0) {
      error = true;
      inp.classList.add("error");
      btn.classList.add("error-btn");
      errors++;
    } else {
      inp.classList.remove("error");
      btn.classList.remove("error-btn");
      successes++;
    }
  });

  suc.innerHTML = successes;
  err.innerHTML = errors;

  if (error) {
    return error;
  } else {
    submit();
  }
};

function submit() {
  let user = {};

  let fm = new FormData(form);

  fm.forEach((value, key) => {
    user[key] = value;
  });

  console.log(user);
}
