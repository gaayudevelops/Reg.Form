
// ELEMENT SELECTORS

// Single Element Selectors
//console.log(document.getElementById('my-form'));
//console.log(document.querySelector('.container'));
// Multiple Element Selectors
//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByTagName('li'));
//console.log(document.getElementsByClassName('item'));

//const items = document.querySelectorAll('.item');
//items.forEach((item) => console.log(item));


// MANIPULATING THE DOM
//const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Green';
//ul.children[1].innerText = 'Yellow';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
//ul.firstElementChild.style="color: green";
//ul.children[1].style="color: yellow";

//const btn = document.querySelector('.btn');
// btn.style.background = 'red';

//Mouse Event
/*const btn = document.querySelector('.btn');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    document.querySelector('#my-form').style.background = "#000";
    document.querySelector('body').classList.add('bg-dark');
    
  });
  btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    
    document.querySelector('#my-form').style.background = "orangered";
    document.querySelector('body').classList.add('bg-dark');
    
  });
  btn.addEventListener('mouseout', (e) => {
    e.preventDefault();
    
    document.querySelector('#my-form').style.background = "#ccc";
    document.querySelector('body').classList.add('bg-dark');
    
  });
*/
  // USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Add HTML
    //li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    console.log(nameInput.value);
    console.log(emailInput.value);

    //STORE ON LOCAL STORAGE
    localStorage.setItem('name', nameInput.value)
    localStorage.setItem('email', emailInput.value)

    console.log(localStorage.getItem('name'));



    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }





} 
