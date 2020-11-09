document.addEventListener('DOMContentLoaded', function() {
            const submit = document.getElementsByClassName("submit")[0];
            if (submit) {
                submit.onclick = function() {
                    //submit.classList.add("submit--spinner");
                    submit.setAttribute("value", "Sending...");
                };
            };
        });
