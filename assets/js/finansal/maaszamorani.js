function maasZamOraniHesapla() {
  const eskiMaas = parseFloat(document.getElementById("eskiMaas").value);
  const yeniMaas = parseFloat(document.getElementById("yeniMaas").value);

  if (isNaN(eskiMaas) || isNaN(yeniMaas) || eskiMaas <= 0) {
    alert("Lütfen geçerli maaş değerleri giriniz.");
    return;
  }

  const fark = yeniMaas - eskiMaas;
  const oran = (fark / eskiMaas) * 100;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>Zam Miktarı:</strong> ${fark.toFixed(2)} ₺<br>
      <strong>Zam Oranı:</strong> %${oran.toFixed(2)}
    </div>
  `;
}
