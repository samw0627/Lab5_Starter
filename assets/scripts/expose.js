// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const airhorn = document.getElementById("horn-select");
  const result = document.querySelector("img[src='assets/images/no-image.png");
  const audio  = document.querySelector("audio");

  airhorn.addEventListener("change", event => {
    if(event.target.value == ("air-horn")){
      result.src="assets/images/air-horn.svg";
      audio.src="assets/audio/air-horn.mp3";

    }
    else if(event.target.value == ("car-horn")){
      result.src="assets/images/car-horn.svg";
      audio.src="assets/audio/car-horn.mp3";
    }
    else if (event.target.value == ("party-horn")){
      result.src="assets/images/party-horn.svg";
      audio.src="assets/audio/party-horn.mp3";
    }
  });
}

