function suHesapla() {
  const kilo = parseFloat(document.getElementById("kilo").value);

  if (isNaN(kilo) || kilo <= 0) {
    alert("Lütfen geçerli bir kilo giriniz.");
    return;
  }

  const ihtiyacMl = kilo * 30;
  const ihtiyacLitre = ihtiyacMl / 1000;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>Günlük Su İhtiyacınız:</strong> ${ihtiyacMl.toFixed(0)} ml (${ihtiyacLitre.toFixed(2)} litre)
    </div>
  `;
}
