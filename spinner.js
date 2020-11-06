const submit = document.getElementsByClassName("submit")[0];
submit.onclick = function() {
  submit.style.color = 'rgb(255 255 255 / 0%)';
  submit.classList.add("submit--spinner");
};
