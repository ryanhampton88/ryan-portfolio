let hero_btn = document.getElementById("hero-btn");
let card_btn = document.querySelector(".card-btn");

hero_btn.addEventListener("mouseover", function() {
    this.textContent = "Let's work!";
})
hero_btn.addEventListener("mouseout", function() {
    this.textContent = "Work with me";
})

// card_btn.addEventListener("click", function() {
//     renderModal();
// })

const renderModal = () => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <div class="modal-bg"></div>
            <div class="modal-content">
                <span class="modal-close">x</span>
                
<!--                BEGINNING MODAL CONTENT -->


                <h1>Konami Code</h1>
<div id="question"></div>
<div id="game">
<!--    <img src="img/doom.jpg" alt="doom-game">-->
</div>
<div id="currentInputCode"></div>
<div id="currentInput"></div>



<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
<script>
  "use strict";
  let i = 0;
  function typeWriter() {
      let question = "Would you like to play a game? Press Enter.";
      let textSpeed = 50;
      if (i < question.length) {
          document.getElementById("question").innerHTML += question.charAt(i);
          i++;
          setTimeout(typeWriter, textSpeed);
      }
  }
  typeWriter();

  $(function(){

      let secretCode = "3840384037393739666513";
      let secretCodeStr = "";
      let strCharacters = "";
      let inputKeys = "";
      let playGame = "13";


      $("body").on("keyup", (event) => {
          console.log(event);
          console.log("event object property 'originalEvent':");
          console.log(event.originalEvent);
          console.log("keycode: " + event.originalEvent.keyCode);
          console.log("key: " + event.originalEvent.key);

          secretCodeStr += event.originalEvent.keyCode;
          strCharacters += event.originalEvent.key;

          if (secretCodeStr === secretCode) {
              alert("You have 100 Lives!");
          }

          if (secretCodeStr === playGame) {
              document.getElementById("game").innerHTML = "<div><img src='img/doom.jpg'></div>";
              secretCodeStr = '';
              strCharacters = '';
          }

          $("#currentInputCode").text(secretCodeStr);
          $("#currentInput").text(strCharacters);

      })



  });

</script>
                
                
                
<!--              ENDING MODAL CONTENT TAG-->
                
            </div>
        </div>
        `;

    // grab nodes from the modal for event listeners
    const modalClose = modal.querySelector(".modal-close");
    const modalBg = modal.querySelector(".modal-bg");

    // add event listener to the close btn
    modalClose?.addEventListener("click", () => {
        modal.remove();
    });
    modalBg?.addEventListener("click", () => {
        modal.remove();
    });

    document.body.appendChild(modal);
}

