const balloons = document.querySelectorAll(".balloon");
const messageBox = document.getElementById("messageBox");

balloons.forEach(balloon => {
  balloon.addEventListener("click", () => {
    const msg = balloon.getAttribute("data-msg");
    messageBox.textContent = msg;
    messageBox.style.display = "block";

    // küçük titreşim efekti
    balloon.style.transform = "scale(1.2)";
    setTimeout(() => {
      balloon.style.transform = "scale(1)";
    }, 300);

    // mesaj 3 saniye sonra kaybolsun
    setTimeout(() => {
      messageBox.style.display = "none";
    }, 3000);
  });
});
