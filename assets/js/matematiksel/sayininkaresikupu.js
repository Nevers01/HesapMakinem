function kareKupHesapla() {
  const sayi = parseFloat(document.getElementById("sayi").value);

  if (isNaN(sayi)) {
    alert("Lütfen geçerli bir sayı giriniz.");
    return;
  }

  const kare = sayi ** 2;
  const kup = sayi ** 3;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>${sayi}</strong> sayısının karesi: <strong>${kare}</strong><br>
      <strong>${sayi}</strong> sayısının küpü: <strong>${kup}</strong>
    </div>
  `;
}
