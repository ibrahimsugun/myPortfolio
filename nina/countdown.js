// Hedef tarihi ayarlayın (yıl, ay, gün, saat, dakika, saniye)
var targetDate = new Date("2023-10-27T23:59:59");

function updateCountdown() {
  var currentDate = new Date();
  var timeLeft = targetDate - currentDate;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

// İlk sayfa yüklendiğinde ve her saniye güncellemesi yapın
updateCountdown();
setInterval(updateCountdown, 1000);
