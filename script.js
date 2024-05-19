// document.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.read-it-button1').addEventListener('click', function() {
//       window.location.href = 'https://www.berkshirehathaway.com/SpecialLetters/WEB%20past%20present%20future%202014.pdf';
//     });
  
//     document.querySelector('.read-it-button2').addEventListener('click', function() {
//       window.location.href = 'https://www.berkshirehathaway.com/SpecialLetters/CTM%20past%20present%20future%202014.pdf';
//     });
//   });
  

document.addEventListener('DOMContentLoaded', (event) => {
  const modal = document.getElementById("modal");
  const btn = document.getElementById("openModal");
  const span = document.getElementsByClassName("close-button")[0];

  btn.onclick = function() {
    modal.style.display = "block";
    document.body.classList.add('modal-open');
  }

  span.onclick = function() {
    modal.style.display = "none";
    document.body.classList.remove('modal-open');
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.classList.remove('modal-open');
    }
  }
});
