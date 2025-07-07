function nabizHesapla() {
  const yas = parseInt(document.getElementById("yas").value);

  if (isNaN(yas) || yas <= 0) {
    alert("Lütfen geçerli bir yaş giriniz.");
    return;
  }

  const maxNabiz = 220 - yas;
  const hedefAlt = maxNabiz * 0.6;
  const hedefUst = maxNabiz * 0.85;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-info">
      <strong>Maksimum Nabız:</strong> ${maxNabiz} bpm<br>
      <strong>Hedef Nabız Aralığı (Yağ Yakımı için):</strong> ${hedefAlt.toFixed(0)} - ${hedefUst.toFixed(0)} bpm
    </div>
  `;
}
