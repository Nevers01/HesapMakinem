function agirlikliOrtalamaHesapla() {
  let toplamNot = 0;
  let toplamKredi = 0;

  for(let i = 1; i <= 5; i++) {
    const notDegeri = parseFloat(document.getElementById(`not${i}`).value);
    const krediDegeri = parseFloat(document.getElementById(`kredi${i}`).value);

    if (isNaN(notDegeri) || isNaN(krediDegeri)) {
      alert(`${i}. ders için geçerli not ve kredi giriniz.`);
      return;
    }

    toplamNot += notDegeri * krediDegeri;
    toplamKredi += krediDegeri;
  }

  if (toplamKredi === 0) {
    alert("Toplam kredi sıfır olamaz.");
    return;
  }

  const ortalama = toplamNot / toplamKredi;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      Ağırlıklı Not Ortalamanız: <strong>${ortalama.toFixed(2)}</strong>
    </div>
  `;
}
