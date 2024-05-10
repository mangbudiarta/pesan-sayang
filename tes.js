var audio = document.querySelector(".audio");
var bg = document.querySelector(".bg");
var isiSurat = document.querySelector(".pesan");
audio.src = musik;
bg.style = "background-image: url('" + background + "')";
function tampil() {
  document.querySelector(".card").style =
    "transition: 0.5s all ease;transform: scale(0);opacity: 0;";
  audio.play();
  setTimeout(typeWriter, 1000);
  setTimeout(function () {
    document.querySelector(".content2").style.display = "block";
  }, 400);
}
var i = 0;
var speed = 90;
isiSurat.value = "";
function typeWriter() {
  if (i < ucapanSurat.length) {
    isiSurat.value += ucapanSurat.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.querySelector(".wa").style.display = "block";
  }
}
