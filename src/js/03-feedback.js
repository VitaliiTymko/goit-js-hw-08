import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

let formData = {};
const STORAGE_KEY = 'feedback-form-state';
refs.form.addEventListener('submit', throttle(onFormSubmit, 500));

savedFormData();

refs.form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  console.log(formData);
});

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function savedFormData(){
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    const parsedFormData = JSON.parse(savedFormData);
    if(parsedFormData) {
        formData = parsedFormData;
        refs.email.value = formData.email || "";
        refs.textarea.value = formData.message || "";
        console.log(savedFormData);
    }
};