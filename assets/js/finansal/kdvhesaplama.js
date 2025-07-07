function kdvHesapla() {
  const tutar = parseFloat(document.getElementById("tutar").value);
  const oran = parseFloat(document.getElementById("kdvOrani").value);

  if (isNaN(tutar) || isNaN(oran)) {
    alert("Lütfen geçerli bir tutar giriniz.");
    return;
  }

  const kdv = tutar * oran;
  const toplam = tutar + kdv;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>KDV:</strong> ${kdv.toFixed(2)} ₺<br>
      <strong>Toplam Tutar:</strong> ${toplam.toFixed(2)} ₺
    </div>
  `;
}
