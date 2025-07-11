function burcHesapla() {
  const tarihStr = document.getElementById("gun").value;

  if (!tarihStr) {
    alert("Lütfen geçerli bir doğum tarihi giriniz.");
    return;
  }

  const tarih = new Date(tarihStr);
  const gun = tarih.getDate();
  const ay = tarih.getMonth() + 1; // Aylar 0-indexli olduğu için +1

  let burc = "";
  if ((ay === 1 && gun >= 21) || (ay === 2 && gun <= 19)) {
    burc = "Kova";
  } else if ((ay === 2 && gun >= 20) || (ay === 3 && gun <= 20)) {
    burc = "Balık";
  } else if ((ay === 3 && gun >= 21) || (ay === 4 && gun <= 20)) {
    burc = "Koç";
  } else if ((ay === 4 && gun >= 21) || (ay === 5 && gun <= 21)) {
    burc = "Boğa";
  } else if ((ay === 5 && gun >= 22) || (ay === 6 && gun <= 22)) {
    burc = "İkizler";
  } else if ((ay === 6 && gun >= 23) || (ay === 7 && gun <= 22)) {
    burc = "Yengeç";
  } else if ((ay === 7 && gun >= 23) || (ay === 8 && gun <= 22)) {
    burc = "Aslan";
  } else if ((ay === 8 && gun >= 23) || (ay === 9 && gun <= 22)) {
    burc = "Başak";
  } else if ((ay === 9 && gun >= 23) || (ay === 10 && gun <= 22)) {
    burc = "Terazi";
  } else if ((ay === 10 && gun >= 23) || (ay === 11 && gun <= 21)) {
    burc = "Akrep";
  } else if ((ay === 11 && gun >= 22) || (ay === 12 && gun <= 21)) {
    burc = "Yay";
  } else if ((ay === 12 && gun >= 22) || (ay === 1 && gun <= 20)) {
    burc = "Oğlak";
  } else {
    burc = "Geçersiz tarih.";
  }

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-info">
      <strong>Burcunuz:</strong> ${burc}
    </div>
  `;
}
