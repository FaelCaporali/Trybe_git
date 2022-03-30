window.onload = function () {
  document.querySelector("#submit").addEventListener("click", (event) => {
    if (document.getElementById('aut').checked === false) {
        event.target.preventDefault();
    }
  });
};