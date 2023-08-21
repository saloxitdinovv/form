let form = document.forms.form;
let inputs = form.querySelectorAll(".musted_input");
let btn = document.querySelector(".save");
let suc = document.querySelector(".suc");
let err = document.querySelector(".err");

let pattern = {
  name: /^[A-Za-z\s]+$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,3}$/,
  age: /^\d+$/,
  text: /^[A-Za-zÀ-ȕ0-9(),-_., ]+$/,
};


form.onsubmit = (event) => {
  event.preventDefault();

  let error = false;
  let successes = 0;
  let errors = 0;

  inputs.forEach((inp) => {
    let label = inp.parentElement
    let title = inp.previousElementSibling
    let subtitle = inp.nextElementSibling
    let errorIcon = inp.parentElement.lastChild.previousElementSibling

    let names = inp.getAttribute('id')
    let regex = pattern[names];
    let correct = regex.test(inp.value);

    if (inp.value.length === 0 || correct === false) {
      error = true;
      inp.classList.add("error");
      btn.classList.add("error-btn");
      errors++;
      label.classList.add("error-label");
      title.classList.add("warn");
      subtitle.classList.add("warn");
      subtitle.innerHTML = "Please fill";

      errorIcon.style.display = "block";

      setTimeout(() => {
        errorIcon.style.opacity = "1";
      }, 200);
    } else {

      inp.classList.remove("error");
      btn.classList.remove("error-btn");
      successes++;
      label.classList.remove("error-label");
      title.classList.remove("warn");
      subtitle.classList.remove("warn");
      subtitle.innerHTML = "Need to fill";

      errorIcon.style.display = "none";
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