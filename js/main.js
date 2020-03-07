const name = document.querySelector('.js-name');
const cellphone = document.querySelector('.js-cellphone');
const email = document.querySelector('.js-email');
const program = document.querySelector('.js-program');
const programs= [
  'Desarrollo Front-End',
  'Desarrollo Back-End',
  'Desarrollo de Aplicativos Móviles',
  'Diseño de Experiencia de Usuario',
  'Desarrollo de Videojuegos'
];
const submit = document.querySelector('.js-submit');

if (submit) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const indexProgram = parseInt(program.value);
    const message = 'Nombre: ' + name.value +
      ', Celular: ' + cellphone.value +
      ', Email: ' + email.value +
      ', Programa: ' + programs[indexProgram];
    alert(message);
  });
}



