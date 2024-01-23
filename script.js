document.getElementById("birthdayCard").style.display = "none";
var wishesFormVisible = false;

function showCard() {
  var envelope = document.getElementById("envelope");
  var birthdayCard = document.getElementById("birthdayCard");
  var cardEnvelope = document.getElementById("cardEnvelope");
  var instruction1 = document.getElementById("instruction1");
  var instruction2 = document.getElementById("instruction2");
  var scrollInstruction = document.getElementById("scrollInstruction");

  wishesFormVisible = !wishesFormVisible;

  envelope.classList.add("envelope-clicked");
  cardEnvelope.style.opacity = 0;
  setTimeout(function () {
    cardEnvelope.style.display = "none";
    scrollInstruction.style.opacity = 1;
    var wishesForm = document.querySelector(".wishes-form");
    wishesForm.style.display = wishesFormVisible ? "block" : "none";

    if (wishesFormVisible) {
      document.getElementById("wishesInput").value = "";
    }
    window.scrollTo({
      top: document.getElementById("birthdayCard").offsetTop,
      behavior: "smooth",
    });
  }, 500);
  instruction1.style.opacity = 0;
  instruction2.style.opacity = 0;

  envelope.style.animation = "heartbeat 0.5s ease-in-out";

  setTimeout(function () {
    envelope.style.display = "none";
    birthdayCard.style.display = "block";
  }, 500);
}

document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Tampilkan .scroll-instruction ketika mencapai nilai scroll tertentu (contoh: 200 piksel dari atas)
  var scrollInstruction = document.getElementById("scrollInstruction");
  if (scrollPosition > 300) {
    scrollInstruction.style.opacity = 1;
  } else {
    scrollInstruction.style.opacity = 0;
  }

  // Tampilkan .wishes-form ketika mencapai nilai scroll tertentu (contoh: 400 piksel dari atas)
  var wishesForm = document.getElementById("wishesForm");
  if (scrollPosition > 400) {
    wishesForm.style.opacity = 1;
  } else {
    wishesForm.style.opacity = 0;
  }
});

document.getElementById("send-button").addEventListener("click", function () {
  var wishesInput = document.getElementById("wishesInput").value;

  var defaultMessage = "Happy Birthday, Ncip! 🎉💖";

  var message = wishesInput.trim() !== "" ? wishesInput : defaultMessage;
  window.open("https://api.whatsapp.com/send?phone=+62859111488834&text=" + encodeURIComponent(message));
});

document.addEventListener("click", function () {
  var audio = new Audio("Nadhif Basalamah  penjaga hati Lirik.mp3");
  audio.play();
});
