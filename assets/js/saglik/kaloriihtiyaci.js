function kaloriIhtiyaciHesapla() {
  const yas = parseInt(document.getElementById("yas").value);
  const kilo = parseFloat(document.getElementById("kilo").value);
  const boy = parseFloat(document.getElementById("boy").value);
  const cinsiyet = document.getElementById("cinsiyet").value;
  const aktivite = parseFloat(document.getElementById("aktivite").value);

  if (isNaN(yas) || isNaN(kilo) || isNaN(boy) || isNaN(aktivite)) {
    alert("Lütfen tüm alanları doğru doldurunuz.");
    return;
  }

  let bmr;

  if (cinsiyet === "erkek") {
    bmr = 88.362 + (13.397 * kilo) + (4.799 * boy) - (5.677 * yas);
  } else {
    bmr = 447.593 + (9.247 * kilo) + (3.098 * boy) - (4.330 * yas);
  }

  const toplamKalori = bmr * aktivite;

  document.getElementById("sonuc").innerHTML = `
    <div class="alert alert-success">
      <strong>Günlük Kalori İhtiyacınız:</strong> ${toplamKalori.toFixed(0)} kcal
    </div>
  `;
}
