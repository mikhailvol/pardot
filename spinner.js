const submit = document.getElementsByClassName("submit")[0];
submit.onclick = function() {
  submit.style.color = 'hsla(0, 0%, 100%, 0)';
  submit.classList.add("submit--spinner");
};
