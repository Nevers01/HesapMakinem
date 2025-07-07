function modHesapla() {
  const sayi1 = parseInt(document.getElementById("sayi1").value);
  const sayi2 = parseInt(document.getElementById("sayi2").value);

  if (isNaN(sayi1) || isNaN(sayi2)) {
    alert("Lütfen geçerli sayılar giriniz.");
    return;
  }
  if (sayi2 === 0) {
    alert("Bölen sayı sıfır olamaz.");
    return;
  }

  const mod = sayi1 % sayi2;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      ${sayi1} mod ${sayi2} = <strong>${mod}</strong>
    </div>
  `;
}
