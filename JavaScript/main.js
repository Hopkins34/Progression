document.getElementById("Section1__button").addEventListener("click", function() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

document.getElementById("Section2__button").addEventListener("click", function() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

document.getElementById("Section3__button").addEventListener("click", function() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

document.getElementById("Section4__button").addEventListener("click", function() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

document.getElementById("Section5__button").addEventListener("click", function() {
  window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

const form = document.querySelector('.Form')
const NameRegex = /^[A-Z][a-zA-Z'-]{1,}( [A-Z][a-zA-Z'-]{1,})?$/

form.Name.addEventListener ('keyup', e => {

  if(form.Name.value == ''){
    form.Name.style.backgroundColor = "";
  } else if (NameRegex.test(e.target.value)) {
    form.Name.style.backgroundColor = "lightgreen";
  } else {
    form.Name.style.backgroundColor = "lightcoral";
  }

});

form.addEventListener('submit', e => {

  e.preventDefault();

  let name;

  if(NameRegex.test(form.Name.value)){
    form.Name.style.backgroundColor = "";
    name = form.Name.value;
    form.Name.value = '';
    const output = document.querySelector('.output');
    output.innerHTML = '';
    const p = document.createElement("p");
    p.textContent = `Your name is ${name}`;
    output.appendChild(p);
  } else {
    alert("Try Again");
  }

});
