function harcamaPlanla() {
  const gelir = parseFloat(document.getElementById("gelir").value);
  const gider = parseFloat(document.getElementById("gider").value);

  if (isNaN(gelir) || isNaN(gider) ) {
    alert("Lütfen tüm alanları doğru giriniz.");
    return;
  }

  const kalan = gelir - gider;
  const gunluk = kalan / 30;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-info">
      <strong>Aylık Artan Para:</strong> ${kalan.toFixed(2)} ₺<br>
      <strong>Günlük Harcama Limiti:</strong> ${gunluk.toFixed(2)} ₺
    </div>
  `;
}
