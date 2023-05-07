// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  const airhorn = document.getElementById("horn-select");
  const result = document.querySelector("img[src='assets/images/no-image.png']");
  const volume_icon = document.querySelector("img[src='assets/icons/volume-level-2.svg']");
  const audio  = document.querySelector("audio");
  const volume = document.querySelector("#volume");
  const button = document.querySelector("button");
  JSConfetti = new JSConfetti();

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

  volume.addEventListener("input", event =>{
    audio.volume = event.target.value/ 100;
    if(event.target.value == 0){
      volume_icon.src="assets/icons/volume-level-0.svg";
    }
    if(event.target.value >= 1 && event.target.value <33){
      volume_icon.src="assets/icons/volume-level-1.svg";
    }
    if(event.target.value >= 33 && event.target.value <67){
      volume_icon.src="assets/icons/volume-level-2.svg";
    }
    if(event.target.value >= 67){
      volume_icon.src="assets/icons/volume-level-3.svg";
    }
    
  });

  button.addEventListener("click", event =>{
    audio.play();
    if(airhorn.value == "party-horn"){
      JSConfetti.addConfetti();
    }
  });

}



