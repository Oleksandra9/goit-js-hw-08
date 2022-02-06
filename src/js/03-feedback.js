import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector("form"),
    inputEl: document.querySelector("input"),
    messageEl: document.querySelector("textarea"),
    
}

// console.log(refs.form);
// console.log(refs.inputEl);
// console.log(refs.messageEl);


let formData = {};
const STORAGE_KEY = "feedback-form-state"

refs.form.addEventListener("input", throttle(onFormInput,500));
refs.form.addEventListener("submit", onFormSubmit);
checkLocalStorage();

function onFormInput () {
    formData = {
        email: refs.inputEl.value,
        message: refs.messageEl.value,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    return formData;
}

function onFormSubmit (event) {
    event.preventDefault();
    console.log( JSON.parse(localStorage.getItem(STORAGE_KEY)));
    event.currentTarget.reset();
    
    localStorage.removeItem(STORAGE_KEY);
    
}

function checkLocalStorage() {
    const recordLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(recordLocalStorage);
    if (recordLocalStorage) {        
        refs.inputEl.value = recordLocalStorage.email;
        refs.messageEl.value = recordLocalStorage.message;
    }
}