
// Mobil menu activator
const openMenu = document.getElementById('open-menu-btn')
const closeMenu = document.getElementById('close-menu-btn')
const navMenu = document.getElementsByClassName('nav__menu')
openMenu.addEventListener('click', () => {
    navMenu[0].style.display = 'block'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'

})


closeMenu.addEventListener('click', () => {
    navMenu[0].style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'

})


const say1 = document.querySelector('.timer__first')


var timer;

function saygac1() {
    var sec = 0;
    timer = setInterval(() => {
        if (sec < 451) {
            say1.innerHTML = sec + "+"
            sec++
        }
    }, 10);
}

saygac1()


const say2 = document.querySelector('.timer__second')

function saygac2() {
    var sec = 0;
    timer = setInterval(() => {
        if (sec < 80001) {
            say2.innerHTML = sec + "+"
            sec++
        }
    }, 0);
}

saygac2()

const say3 = document.querySelector('.timer__thrid')

function saygac3() {
    var sec = 0;
    timer = setInterval(() => {
        if (sec < 29) {
            say3.innerHTML = sec + "+"
            sec++
        }
    }, 200);
}

saygac3()


// new form's js start

//form valudation
const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function showSucces(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//check email
//regular expression regex
//regex for username or regex for mobil
function checkEmail(input) {
  
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value.trim())) {
    showSucces(input);
  } else {
    showError(input, "Please enter your email address correctly"); 
  }
}

//checkRequiered fields
//masssivler mentiqi

function checkRequiered(inputArray) {
  inputArray.forEach(function (input) {
    if (input.value.trim() == " ") {
      showError(input, `${getFieldName(input)} is requiered`);
    } else {
      showSucces(input);
    }
  });
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSucces(input);
  }
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords don't match ");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequiered([userName, email, password, confirmPassword]);
  checkLength(userName, 4, 12);
  checkLength(password, 7, 22);
  checkEmail(email);
  checkPasswordMatch(password, confirmPassword);
});



// form.addEventListener("submit", function(){
//     alert('Muracietiniz Qebul olundu!Geri donush edeceyik!')
// })