function bukaPesan() {
  const konten = document.querySelector(".konten");
  const isiPesan = document.querySelector(".isiPesan");
  const loader = document.querySelector(".box-loader");
  loader.style.display = "flex";
  konten.style.display = "none";
  setTimeout(() => {
    isiPesan.style.display = "block";
    loader.style.display = "none";
  }, 2500);
  setTimeout(ketikSurat, 1000);
}

function balasPesan() {
  const pesanWhatsapp = "Aku sayang budi💕 ";
  window.open(
    "https://wa.me/+6283114123271?text=" + encodeURIComponent(pesanWhatsapp),
    "_blank"
  );
}

let isiSurat = document.querySelector(".pesan");
let ucapanSurat =
  "Halo ayang, aku memang bukan orang yang romantis, tapi selamat ulang tahun sayangg 😘❤️";
let i = 0;
let speed = 90;
isiSurat.value = "";
function ketikSurat() {
  if (i < ucapanSurat.length) {
    isiSurat.value += ucapanSurat.charAt(i);
    i++;
    setTimeout(ketikSurat, speed);
  } else {
    document.querySelector(".btnWa").classList.add("show");
  }
}
