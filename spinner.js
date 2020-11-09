document.addEventListener('DOMContentLoaded', function() {
            const submit = document.getElementsByClassName("submit")[0];
            if (submit) {
                submit.onclick = function() {
                    submit.style.color = 'hsla(0, 0%, 100%, 0)';
                    submit.classList.add("submit--spinner");
                };
            };
        });
