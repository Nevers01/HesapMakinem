function saatDonustur() {
  const timeInput = document.getElementById("saat").value;

  if (!timeInput) {
    alert("Lütfen bir saat değeri giriniz.");
    return;
  }

  const [saatStr, dakikaStr] = timeInput.split(":");
  const saat = parseInt(saatStr, 10);
  const dakika = parseInt(dakikaStr, 10);

  const toplamDakika = saat * 60 + dakika;
  const ondalikliSaat = (toplamDakika / 60).toFixed(2);

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>Girilen Saat:</strong> ${saat} Saat ${dakika} Dakika<br>
      <strong>Toplam Dakika:</strong> ${toplamDakika} dakika<br>
      <strong>Ondalıklı Saat:</strong> ${ondalikliSaat} saat
    </div>
  `;
}
