"use strict"

// local storage

function setInStorage (obj) {
  const id = Math.floor(Math.random()*1000);
  localStorage.setItem(id, JSON.stringify(obj));
}

function getInStorage (id) {
  return JSON.parse(localStorage.getItem(id))
}

const form = document.forms.formContacts;
const formName = form.nameInput;
const formTel = form.telInput;

const messageEror = document.querySelector(".form__error-message");

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const regName =/^[а-яёА-ЯЁa-zA-Z ]+$/;
  const regTel =/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  if(!formName.value.match(regName)) {
    formName.classList.add('error')
  } else {
    formName.classList.remove('error')
  }

  if(!formTel.value.match(regTel)) {
    formTel.classList.add('error')
  } else {
    formTel.classList.remove('error')
  }



});
