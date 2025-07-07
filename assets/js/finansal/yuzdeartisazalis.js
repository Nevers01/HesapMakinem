function yuzdeDegisimHesapla() {
  const ilkDeger = parseFloat(document.getElementById("ilkDeger").value);
  const yeniDeger = parseFloat(document.getElementById("yeniDeger").value);

  if (isNaN(ilkDeger) || isNaN(yeniDeger) || ilkDeger === 0) {
    alert("Lütfen geçerli değerler giriniz (ilk değer sıfır olamaz).");
    return;
  }

  const fark = yeniDeger - ilkDeger;
  const oran = (fark / ilkDeger) * 100;

  let mesaj = "";
  if (oran > 0) {
    mesaj = `<strong>Yüzde Artış:</strong> %${oran.toFixed(2)}`;
  } else if (oran < 0) {
    mesaj = `<strong>Yüzde Azalış:</strong> %${Math.abs(oran).toFixed(2)}`;
  } else {
    mesaj = "Değerlerde bir değişiklik yok.";
  }

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-info">${mesaj}</div>
  `;
}
