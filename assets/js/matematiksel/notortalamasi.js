function notOrtalamaHesapla() {
  const notlar = [];
  for(let i = 1; i <= 5; i++) {
    const deger = parseFloat(document.getElementById(`not${i}`).value);
    if (isNaN(deger)) {
      alert(`${i}. notu geçerli giriniz.`);
      return;
    }
    notlar.push(deger);
  }

  const toplam = notlar.reduce((a, b) => a + b, 0);
  const ortalama = toplam / notlar.length;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      Not Ortalamanız: <strong>${ortalama.toFixed(2)}</strong>
    </div>
  `;
}
